import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { EsHelperService } from 'src/es-helper/es-helper.service';
import { Course } from 'src/shared/entities/course.entity';
import { EntityStatus } from 'src/shared/enums/entity-status';
import { CourseEsDoc } from './dto/course-es-doc.dto';
import { CourseSearchRequest } from './dto/course-search-request.dto';

@Injectable()
export class CourseEsService {

  private readonly ES_INDEX_NAME;
  constructor(
    private esService: ElasticsearchService,
    private esHelper: EsHelperService,
    private config: ConfigService,
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
          filter: [
            {
              term: {
                status: EntityStatus.ACTIVE,
              },
            },
          ],
        },
      },
      sort: [
        // sort options
        {
          [request.orderBy]: {
            order: request.orderDirection,
          },
        },
        {
          totalEnrollment: {
            order: 'desc',
          },
        },
        {
          updatedDate: {
            order: 'desc',
          },
        },
      ],
    };

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

  upsertCourse(course: Course) {
    return this.esHelper.upsert(
      this.ES_INDEX_NAME,
      String(course.id),
      CourseEsDoc.of(course),
    );
  }

  partialUpdate(id: number, doc: any) {
    return this.esHelper.upsert(this.ES_INDEX_NAME, String(id), doc);
  }

  updateStatus(id: number, status: EntityStatus) {
    return this.partialUpdate(id, { status });
  }
}
