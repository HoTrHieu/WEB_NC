import { BadGatewayException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { InjectRepository } from '@nestjs/typeorm';
import { PagingResponse } from 'src/shared/dtos/paging-response.dto';
import { Course } from 'src/shared/entities/course.entity';
import { EntityStatus } from 'src/shared/enums/entity-status';
import { In, Repository } from 'typeorm';
import { CourseOrderBy } from './dto/course-order-by';
import { CourseSearchRequest } from './dto/course-search-request.dto';

@Injectable()
export class CourseService {

  public static OrderBy = {
    [CourseOrderBy.PRICE]: 'price',
    [CourseOrderBy.REVIEW]: 'star'
  };

  private readonly ES_INDEX_NAME = "";
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
    private esService: ElasticsearchService,
    private config: ConfigService
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
              }
            }
          ]
        }
      },
      sort: [
        // sort options
        {
          [request.orderBy]: {
            order: request.orderDirection
          }
        },
        {
          totalEnrollment: {
            order: 'desc'
          }
        },
        {
          updatedDate: {
            order: 'desc'
          }
        }
      ]
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
      body: searchBody
    });

    if (!esResult.body.hits) {
      throw new InternalServerErrorException("Search from Elasticsearch failed!");
    }

    const courseIds = esResult.body.hits.hits.map((hit) => Number(hit._id));
    const courses = await this.findByIdIn(courseIds);

    return PagingResponse.of(
      request.page,
      request.pageSize,
      esResult.body.hits.total.value,
      courses
    );
  }

  async findByIdIn(ids: number[]) {
    if (!Array.isArray(ids) || ids.length === 0) {
      return [];
    }

    return this.courseRepository.find({
      where: {
        id: In(ids),
        status: EntityStatus.ACTIVE
      },
      relations: ['creator', 'category'],
    })
  }

  async getDetail(courseId: number) {
    const course = await this.courseRepository.findOne({
      where: { id: courseId },
      relations: ['contents', 'creator', 'category']
    });

    if (!course) {
      throw new NotFoundException("Khóa học này không tồn tại");
    }
  }

  async exists(courseId: number) {
    return (
      (await this.courseRepository.count({
        where: { id: courseId },
      })) > 0
    );
  }

  async validate(courseId: number, userId: number) {
    return (
      (await this.courseRepository.count({
        where: { id: courseId, creatorId: userId },
      })) > 0
    );
  }

  async validateAndThrow(courseId: number, userId: number) {
    const courseExists = await this.validate(courseId, userId);
    if (!courseExists) {
      throw new BadGatewayException(
        'Bạn không có quyền chỉnh sửa khóa học này',
      );
    }
  }

  async add(userId: number, course: Course) {
    course.creator = { id: userId } as any;
    return this.courseRepository.save(course);
  }

  async update(userId: number, courseId: number, course: Course) {
    await this.validateAndThrow(courseId, userId);
    const result = await this.courseRepository.update(
      {
        id: courseId,
      },
      {
        title: course.title,
        subDescription: course.subDescription,
        description: course.description,
        price: course.price,
        avatarPath: course.avatarPath,
        coverPath: course.coverPath,
      },
    );
    return result.affected > 0;
  }

  async updateStatus(userId: number, courseId: number, status: EntityStatus) {
    await this.validateAndThrow(courseId, userId);
    const result = await this.courseRepository.update(
      { id: courseId },
      {
        status,
      },
    );
    return result.affected > 0;
  }
}
