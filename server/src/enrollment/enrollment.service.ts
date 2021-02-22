import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseService } from 'src/course/course.service';
import { PagingRequest } from 'src/shared/dtos/paging-request.dto';
import { Enrollment } from 'src/shared/entities/enrollment.entity';
import { PagingUtil } from 'src/shared/utils/paging.util';
import { Repository } from 'typeorm';

@Injectable()
export class EnrollmentService {
  constructor(
    @InjectRepository(Enrollment)
    private enrollmentRepository: Repository<Enrollment>,
    private courseService: CourseService
  ) {}

  paginate(userId: number, request: PagingRequest) {
    return PagingUtil.paginate(this.enrollmentRepository, request, {
      where: { userId }
    });
  }

  getDetail(courseId: number, userId: number) {
    return this.enrollmentRepository.find({
      where: { courseId, userId },
      relations: ['studyProcesses']
    });
  }

  async exists(courseId: number, userId: number) {
    return (await this.enrollmentRepository.count({
      where: { courseId, userId }
    })) > 0
  }

  async enroll(courseId: number, userId: number) {
    if (this.exists(courseId, userId)) {
      throw new BadRequestException("Bạn đã tham gia khóa học này rồi");
    }
    if (!this.courseService.exists(userId)) {
      throw new BadRequestException("Khóa học này không tồn tại");
    }
    return this.enrollmentRepository.save(Enrollment.of(courseId, userId));
  }
}
