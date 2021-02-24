import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseModule } from 'src/course/course.module';
import { EnrollmentModule } from 'src/enrollment/enrollment.module';
import { Review } from 'src/shared/entities/review.entity';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';

@Module({
  imports: [TypeOrmModule.forFeature([Review]), EnrollmentModule, CourseModule],
  controllers: [ReviewController],
  providers: [ReviewService],
  exports: [ReviewService],
})
export class ReviewModule {}
