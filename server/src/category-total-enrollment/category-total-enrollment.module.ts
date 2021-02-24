import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseModule } from 'src/course/course.module';
import { CategoryTotalEnrollment } from 'src/shared/entities/category-total-enrollment.entity';
import { CategoryTotalEnrollmentService } from './category-total-enrollment.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryTotalEnrollment]), CourseModule],
  providers: [CategoryTotalEnrollmentService],
  exports: [CategoryTotalEnrollmentService],
})
export class CategoryTotalEnrollmentModule {}
