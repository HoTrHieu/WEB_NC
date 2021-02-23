import { BadGatewayException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from 'src/shared/entities/course.entity';
import { EntityStatus } from 'src/shared/enums/entity-status';
import { Repository } from 'typeorm';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
  ) {}

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
