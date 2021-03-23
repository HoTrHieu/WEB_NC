import {
  BadGatewayException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthUser } from 'src/auth/dto/auth-user.dto';
import { ContentService } from 'src/content/content.service';
import { EnrollmentService } from 'src/enrollment/enrollment.service';
import { HighlightCourseService } from 'src/highlight-course/highlight-course.service';
import { PagingResponse } from 'src/shared/dtos/paging-response.dto';
import { Course } from 'src/shared/entities/course.entity';
import { Enrollment } from 'src/shared/entities/enrollment.entity';
import { WatchList } from 'src/shared/entities/watch-list.entity';
import { EntityStatus } from 'src/shared/enums/entity-status';
import { ArrayUtil } from 'src/shared/utils/array.util';
import { WatchListService } from 'src/watch-list/watch-list.service';
import { FindManyOptions, In, Not, Repository } from 'typeorm';
import { CourseEsService } from './course-es.service';
import { CourseResponse } from './dto/course-response.dto';
import { CourseSearchRequest } from './dto/course-search-request.dto';
import { CourseTopType } from './enums/course-top-type';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CourseService {
  private readonly logger = new Logger(CourseService.name);
  private readonly PROJECTION = [
    'id',
    'title',
    'subDescription',
    'price',
    'discount',
    'avatarPath',
    'totalEnrollment',
    'avgStar',
    'totalView',
    'totalReview',
    'creatorId',
    'categoryId',
    'createdDate',
    'updatedDate',
  ];

  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
    private courseEsService: CourseEsService,
    private highlightCourseService: HighlightCourseService,
    private watchListService: WatchListService,
    private enrollmentService: EnrollmentService,
    private contentService: ContentService
  ) {}

  async decor(courses: Course[], user?: AuthUser): Promise<CourseResponse[]> {
    if (!user) {
      return courses;
    }
    const courseIds = courses.map((c) => c.id);
    const watchList = await this.watchListService.findByCourseIdIn(
      user.id,
      courseIds,
    );
    const enrollment = await this.enrollmentService.findByCourseIdIn(
      user.id,
      courseIds,
    );
    const isWatchList = watchList.reduce((map: any, curr: WatchList) => {
      map[curr.courseId] = true;
      return map;
    }, {});
    const isEnrollment = enrollment.reduce((map: any, curr: Enrollment) => {
      map[curr.courseId] = true;
      return map;
    }, {});
    return courses.map((course) => ({
      ...course,
      isWatchList: isWatchList[course.id] || false,
      isEnrollment: isEnrollment[course.id] || false,
    }));
  }

  async all(user?: AuthUser) {
    const courses = await this.courseRepository.find({
      where: {
        status: EntityStatus.ACTIVE,
      },
      select: this.PROJECTION as any,
      relations: ['category'],
    });

    return this.decor(courses);
  }

  async search(request: CourseSearchRequest, user?: AuthUser) {
    let courses = [];
    let total = 0;
    let isEmpty = false;
    if (request.onlyWatchList) {
      const watchList = await this.watchListService.findByUserId(user.id);
      request.ids = watchList.map((wl) => wl.courseId);
      isEmpty = request.ids.length === 0;
    }
    if (request.onlyEnrollment) {
      const enrollments = await this.enrollmentService.findByUserId(user.id);
      request.ids = enrollments.map((e) => e.courseId);
      isEmpty = request.ids.length === 0;
    }
    if (!isEmpty) {
      const esResult = await this.courseEsService.search(request);
      total = esResult.total;
      courses = await this.findByIdIn(esResult.courseIds);
    }
    return PagingResponse.of(
      request.page,
      request.pageSize,
      total,
      await this.decor(courses, user),
    );
  }

  async findByIdIn(ids: number[], options?: FindManyOptions<Course>) {
    if (ArrayUtil.isEmpty(ids)) {
      return [];
    }

    const rawResult = await this.courseRepository.find({
      where: {
        id: In(ids),
        status: EntityStatus.ACTIVE,
      },
      select: this.PROJECTION as any,
      relations: ['creator', 'category', 'category.parent'],
      ...options,
    });

    const idxMap = ids.reduce((map: any, id: number, idx: number) => {
      map[id] = idx;
      return map;
    }, {});

    const result = [];
    rawResult.forEach((item) => {
      result[idxMap[item.id]] = item;
    });
    return result;
  }

  async getDetail(courseId: number, user?: AuthUser) {
    const course = await this.courseRepository.findOne({
      where: { id: courseId },
      relations: ['contents', 'creator', 'category', 'category.parent'],
    });

    if (!course) {
      throw new NotFoundException('This course is not exists');
    }

    await this.increaseTotalView(courseId);
    const responses = await this.decor([course], user);
    return responses[0];
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

  async save(course: Course) {
    return this.courseRepository.manager.transaction(async () => {
      const { contents, ...restCourse } = course;
      const savedCourse = await this.courseRepository.save({
        ...restCourse,
        slug: uuidv4()
      });
      if (!!savedCourse) {
        if (!!contents) {
          contents.forEach(content => content.courseId = savedCourse.id);
          this.contentService.save(...contents);
        }
        if (!(await this.courseEsService.upsertCourse(savedCourse))) {
          throw new Error(
            `Upsert elasticsearch failed for course: ${savedCourse.id}`,
          );
        }
        return savedCourse;
      }
      return null;
    });
  }

  async add(userId: number, course: Course) {
    course.creatorId = userId;
    return this.save(course);
  }

  async update(userId: number, courseId: number, course: Course) {
    await this.validateAndThrow(courseId, userId);
    return this.courseRepository.manager.transaction(async () => {
      const change = {
        title: course.title,
        slug: uuidv4(),
        subDescription: course.subDescription,
        description: course.description,
        price: course.price,
        discount: course.discount,
        avatarPath: course.avatarPath,
        coverPath: course.coverPath,
        categoryId: course.categoryId,
      };
      const success = await this.partialUpdate(courseId, change);
      if (!success) {
        throw new Error(`Partial update failed for course: ${courseId}`);
      }
      if (!!course.contents) {
        course.contents.forEach(content => content.courseId = courseId);
        await this.contentService.save(...course.contents);
      }
      return success;
    });
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

  async updateAvgStar(courseId: number, avgStar: number) {
    const result = await this.partialUpdate(courseId, {
      avgStar,
      totalReview: () => `totalReview + 1`,
    });
    if (avgStar >= 3) {
      await this.highlightCourseService.increaseScore(courseId, 2);
    }
    return result;
  }

  async updateTotalEnrollment(courseId: number, totalEnrollment: number) {
    const result = await this.partialUpdate(courseId, { totalEnrollment });
    await this.highlightCourseService.increaseScore(courseId, 3);
    return result;
  }

  async findTotalView(courseId: number) {
    const {
      totalView,
    } = await this.courseRepository
      .createQueryBuilder()
      .where('id = :courseId', { courseId })
      .select('totalView')
      .getRawOne();
    return totalView;
  }

  async increaseTotalView(courseId: number) {
    const totalView = await this.findTotalView(courseId);
    if (Number.isNaN(totalView)) {
      throw new NotFoundException('This course is not exists');
    }
    const result = await this.partialUpdate(courseId, {
      totalView: totalView + 1,
    });
    await this.highlightCourseService.increaseScore(courseId, 1);
    return result;
  }

  async topOfWeeks(user?: AuthUser) {
    const highlights = await this.highlightCourseService.topOfWeeks();
    const highlightSize = Array.isArray(highlights) ? highlights.length : 0;
    const highlightCourseIds = highlights.map((h) => h.courseId);
    const courses = await this.findByIdIn(highlightCourseIds);
    if (highlightSize < 5) {
      courses.push(
        ...(await this.courseRepository.find({
          where: {
            id: Not(In(highlightCourseIds)),
            status: EntityStatus.ACTIVE,
          },
          order: {
            totalEnrollment: 'DESC',
            avgStar: 'DESC',
            totalView: 'DESC',
          },
          relations: ['creator', 'category', 'category.parent'],
          take: 5 - highlightSize,
        })),
      );
    }
    return this.decor(courses, user);
  }

  async top(type: CourseTopType, limit: number = 10, user?: AuthUser) {
    const courses = await this.courseRepository.find({
      where: {
        status: EntityStatus.ACTIVE,
      },
      order: {
        [type]: 'DESC',
      },
      relations: ['creator', 'category', 'category.parent'],
      take: limit,
    });
    return this.decor(courses, user);
  }
}
