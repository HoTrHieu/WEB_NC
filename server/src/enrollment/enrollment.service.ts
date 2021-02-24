import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseService } from 'src/course/course.service';
import { PagingRequest } from 'src/shared/dtos/paging-request.dto';
import { Enrollment } from 'src/shared/entities/enrollment.entity';
import { PagingUtil } from 'src/shared/utils/paging.util';
import { Repository } from 'typeorm';

@Injectable()
export class EnrollmentService {

  private readonly logger = new Logger(EnrollmentService.name);

  constructor(
    @InjectRepository(Enrollment)
    private enrollmentRepository: Repository<Enrollment>,
    private courseService: CourseService,
  ) {}

  paginate(userId: number, request: PagingRequest) {
    return PagingUtil.paginate(this.enrollmentRepository, request, {
      where: { userId },
    });
  }

  getDetail(courseId: number, userId: number) {
    return this.enrollmentRepository.findOne({
      where: { courseId, userId },
      relations: ['studyProcesses'],
    });
  }

  async exists(courseId: number, userId: number) {
    return (
      (await this.enrollmentRepository.count({
        where: { courseId, userId },
      })) > 0
    );
  }

  findOne(courseId: number, userId: number) {
    return this.enrollmentRepository.findOne({ courseId, userId });
  }

  findTotalEnrollment(courseId: number) {
    return this.enrollmentRepository
      .createQueryBuilder()
      .where('courseId = :courseId', { courseId })
      .select('COUNT(*)')
      .getRawOne();
  }

  async enroll(courseId: number, userId: number) {
    if (this.exists(courseId, userId)) {
      throw new BadRequestException('Bạn đã tham gia khóa học này rồi');
    }
    if (!this.courseService.exists(userId)) {
      throw new BadRequestException('Khóa học này không tồn tại');
    }
    const savedEnrollment = await this.enrollmentRepository.save(
      Enrollment.of(courseId, userId),
    );
    if (!!savedEnrollment) {
      const totalEnrollment = await this.findTotalEnrollment(courseId);
      const success = await this.courseService.updateTotalEnrollment(courseId, totalEnrollment);
      if (!success) {
        this.logger.error(`Update total enrollment failed for course: ${courseId}`);
      }
    }
    return savedEnrollment;
  }
}
