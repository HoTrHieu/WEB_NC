import {
  BadGatewayException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PagingResponse } from 'src/shared/dtos/paging-response.dto';
import { Course } from 'src/shared/entities/course.entity';
import { EntityStatus } from 'src/shared/enums/entity-status';
import { OrderDirection } from 'src/shared/enums/order-direction';
import { ArrayUtil } from 'src/shared/utils/array.util';
import { In, Repository } from 'typeorm';
import { CourseEsService } from './course-es.service';
import { CourseSearchRequest } from './dto/course-search-request.dto';

@Injectable()
export class CourseService {
  private readonly logger = new Logger(CourseService.name);

  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
    private courseEsService: CourseEsService,
  ) {}

  async search(request: CourseSearchRequest) {
    const esResult = await this.courseEsService.search(request);
    const courses = await this.findByIdIn(esResult.courseIds);
    courses.sort((a, b) => {
      return (
        (a[request.orderBy] - b[request.orderBy]) *
        (request.orderDirection === OrderDirection.ASC ? -1 : 1)
      );
    });
    return PagingResponse.of(
      request.page,
      request.pageSize,
      esResult.total,
      courses,
    );
  }

  async findByIdIn(ids: number[]) {
    if (ArrayUtil.isEmpty(ids)) {
      return [];
    }

    return this.courseRepository.find({
      where: {
        id: In(ids),
        status: EntityStatus.ACTIVE,
      },
      select: [
        'id',
        'title',
        'subDescription',
        'price',
        'avatarPath',
        'totalEnrollment',
        'avgStar',
        'totalView',
        'creatorId',
        'categoryId',
        'createdDate',
        'creator',
        'category',
      ],
      relations: ['creator', 'category', 'category.parent'],
    });
  }

  async getDetail(courseId: number) {
    const course = await this.courseRepository.findOne({
      where: { id: courseId },
      relations: ['contents', 'creator', 'category', 'category.parent'],
    });

    if (!course) {
      throw new NotFoundException('This course is not exists');
    }

    return course;
  }

  async findCategoryId(courseId: number) {
    const {
      categoryId,
    } = await this.courseRepository
      .createQueryBuilder()
      .where('id = :courseId', { courseId })
      .select('categoryId')
      .getRawOne();
    return categoryId;
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
    course.creatorId = userId;
    const savedCourse = await this.courseRepository.save(course);
    if (!!savedCourse) {
      const success = await this.courseEsService.upsertCourse(course);
      if (!success) {
        this.logger.error(
          `Upsert elasticsearch failed for course: ${savedCourse.id}`,
        );
      }
    }
    return savedCourse;
  }

  async update(userId: number, courseId: number, course: Course) {
    await this.validateAndThrow(courseId, userId);
    const change = {
      title: course.title,
      subDescription: course.subDescription,
      description: course.description,
      price: course.price,
      avatarPath: course.avatarPath,
      coverPath: course.coverPath,
      categoryId: course.categoryId,
    };
    const result = await this.courseRepository.update(
      {
        id: courseId,
      },
      change,
    );
    let success = result.affected > 0;
    if (success) {
      return await this.partialUpdate(courseId, change);
    }
    return success;
  }

  private async partialUpdate(courseId: number, change: any) {
    const result = await this.courseRepository.update({ id: courseId }, change);
    const success = result.affected > 0;
    if (success) {
      return await this.courseEsService.partialUpdate(courseId, change);
    }
    return success;
  }

  async updateStatus(userId: number, courseId: number, status: EntityStatus) {
    await this.validateAndThrow(courseId, userId);
    return this.partialUpdate(courseId, { status });
  }

  updateAvgStar(courseId: number, avgStar: number) {
    return this.partialUpdate(courseId, { avgStar });
  }

  updateTotalEnrollment(courseId: number, totalEnrollment: number) {
    return this.partialUpdate(courseId, { totalEnrollment });
  }

  async findTotalView(courseId: number) {
    const {
      totalView,
    } = await this.courseRepository
      .createQueryBuilder()
      .where('courseId = :courseId', { courseId })
      .select('totalView')
      .getRawOne();
    return totalView;
  }

  async increaseTotalView(courseId: number) {
    const totalView = await this.findTotalView(courseId);
    if (Number.isNaN(totalView)) {
      throw new NotFoundException('This course is not exists');
    }
    return this.partialUpdate(courseId, { totalView: totalView + 1 });
  }
}