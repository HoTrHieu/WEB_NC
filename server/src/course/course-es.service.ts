import {
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { CategoryService } from 'src/category/category.service';
import { EsHelperService } from 'src/es-helper/es-helper.service';
import { Course } from 'src/shared/entities/course.entity';
import { EntityStatus } from 'src/shared/enums/entity-status';
import { ArrayUtil } from 'src/shared/utils/array.util';
import { CourseEsDoc } from './dto/course-es-doc.dto';
import { CourseSearchRequest } from './dto/course-search-request.dto';

@Injectable()
export class CourseEsService {
  private readonly ES_INDEX_NAME;
  private readonly logger = new Logger(CourseEsService.name);
  constructor(
    private esService: ElasticsearchService,
    private esHelper: EsHelperService,
    private config: ConfigService,
    private categoryService: CategoryService,
  ) {
    this.ES_INDEX_NAME = this.config.get('es.index.course');
  }

  async search(request: CourseSearchRequest) {
    const searchBody: any = {
      from: request.offset,
      size: request.pageSize,
      track_total_hits: true,
      _source: false,
      query: {
        bool: {
          filter: [],
        },
      },
      sort: [
        {
          totalEnrollment: {
            order: 'desc',
          },
        },
        {
          createdDate: {
            order: 'desc',
          },
        },
      ],
    };

    if (request.isSort) {
      searchBody.sort = [
        {
          [request.orderBy]: {
            order: request.orderDirection,
          },
        },
        ...searchBody.sort,
      ];
    }

    if (request.isSearching) {
      if (request.isSearchTermExists) {
        searchBody.query.bool.filter.push({
          match_phrase: {
            title: request.searchTerm,
          },
        });
      }

      if (request.isCategoryIdsExists) {
        searchBody.query.bool.filter.push({
          terms: {
            categoryId: request.getCategoryIds(),
          },
        });
      }

      if (request.isFromPriceExists) {
        searchBody.query.bool.filter.push({
          range: {
            price: { gte: request.fromPrice },
          },
        });
      }

      if (request.isToPriceExists) {
        searchBody.query.bool.filter.push({
          range: {
            price: { lte: request.toPrice },
          },
        });
      }

      if (request.isFromStarExists) {
        searchBody.query.bool.filter.push({
          range: {
            avgStar: { gte: request.fromStar },
          },
        });
      }

      if (request.isFromStarExists) {
        searchBody.query.bool.filter.push({
          range: {
            avgStar: { lte: request.toStar },
          },
        });
      }

      if (request.isIdsExists) {
        searchBody.query.bool.filter.push({
          terms: {
            id: request.ids,
          },
        });
      }

      if (request.isCreatorIdExists) {
        searchBody.query.bool.filter.push({
          term: {
            creatorId: request.creatorId
          }
        });
      }
    }

    const esResult = await this.esService.search({
      index: this.ES_INDEX_NAME,
      body: searchBody,
    });

    if (!esResult.body.hits) {
      throw new InternalServerErrorException(
        'Search from Elasticsearch failed!',
      );
    }

    return {
      total: esResult.body.hits.total.value,
      courseIds: esResult.body.hits.hits.map((hit) => Number(hit._id)),
    };
  }

  async upsertCourse(course: Course) {
    const category = await this.categoryService.findOne(course.categoryId);
    return this.esHelper.upsert(
      this.ES_INDEX_NAME,
      String(course.id),
      CourseEsDoc.of({
        ...course,
        category,
      }),
    );
  }

  async partialUpdate(id: number, doc: any) {
    if ('categoryId' in doc) {
      const parentCategoryId = await this.categoryService.findParentId(
        doc.categoryId,
      );
      doc.categoryId = [doc.categoryId];
      if (!!parentCategoryId) {
        doc.categoryId.push(parentCategoryId);
      }
    }
    return this.esHelper.upsert(this.ES_INDEX_NAME, String(id), doc);
  }

  updateStatus(id: number, status: EntityStatus) {
    return this.partialUpdate(id, { status });
  }

  async syncToEs(courses: Course[]) {
    const body = ArrayUtil.flatMap(
      courses.map((course: Course) => [
        { index: { _index: this.ES_INDEX_NAME, _id: course.id } },
        CourseEsDoc.of(course),
      ]),
    );
    if (body.length > 0) {
      const result = await this.esService.bulk({
        refresh: true,
        body,
      });
      if (result.body.errors) {
        this.logger.error(result.body.errors);
        return false;
      }
    }
    return true;
  }
}
