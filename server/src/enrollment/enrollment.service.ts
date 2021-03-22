import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Enrollment } from 'src/shared/entities/enrollment.entity';
import { EntityStatus } from 'src/shared/enums/entity-status';
import { In, Repository } from 'typeorm';

@Injectable()
export class EnrollmentService {
  constructor(
    @InjectRepository(Enrollment)
    private enrollmentRepository: Repository<Enrollment>,
  ) {}

  findByUserId(userId: number) {
    return this.enrollmentRepository.find({
      where: { userId, status: EntityStatus.ACTIVE }
    });
  }

  findByCourseIdIn(userId: number, courseIds: number[]) {
    return this.enrollmentRepository.find({
      where: {
        userId,
        courseId: In(courseIds),
        status: EntityStatus.ACTIVE
      }
    });
  }

  getDetail(courseId: number, userId: number) {
    return this.enrollmentRepository.findOne({
      where: { courseId, userId },
      relations: ['studyProcesses'],
    });
  }

  async exists(courseId: number, userId: number) {
    return !!(await this.findOne(courseId, userId));
  }

  findOne(courseId: number, userId: number) {
    return this.enrollmentRepository.findOne({ courseId, userId });
  }

  async findTotalEnrollment(courseId: number) {
    const { totalEnrollment } = await this.enrollmentRepository
      .createQueryBuilder()
      .where('courseId = :courseId', { courseId })
      .select('COUNT(*)', 'totalEnrollment')
      .getRawOne();
    return totalEnrollment || 0;
  }

  enroll(courseId: number, userId: number) {
    return this.enrollmentRepository.save(
      Enrollment.of(courseId, userId),
    );
  }
}
