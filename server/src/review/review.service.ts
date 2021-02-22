import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseService } from 'src/course/course.service';
import { EnrollmentService } from 'src/enrollment/enrollment.service';
import { PagingRequest } from 'src/shared/dtos/paging-request.dto';
import { Review } from 'src/shared/entities/review.entity';
import { PagingUtil } from 'src/shared/utils/paging.util';
import { Repository } from 'typeorm';
import { ReviewRequest } from './dto/review-request.dto';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
    private enrollmentService: EnrollmentService,
    private courseService: CourseService,
  ) {}

  paginate(courseId: number, request: PagingRequest) {
    return PagingUtil.paginate(this.reviewRepository, request, {
      where: { courseId },
    });
  }

  async review(courseId: number, userId: number, body: ReviewRequest) {
    if (!this.courseService.exists(userId)) {
      throw new BadRequestException('Khóa học này không tồn tại');
    }
    if (!(await this.enrollmentService.exists(courseId, userId))) {
      throw new BadRequestException('Bạn chưa tham gia khóa học này');
    }
    return this.reviewRepository.save(
      Review.of(courseId, userId, body.star, body.feedback),
    );
  }
}
