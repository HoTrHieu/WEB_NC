import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryTotalEnrollmentModule } from 'src/category-total-enrollment/category-total-enrollment.module';
import { CourseModule } from 'src/course/course.module';
import { Enrollment } from 'src/shared/entities/enrollment.entity';
import { EnrollmentController } from './enrollment.controller';
import { EnrollmentService } from './enrollment.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Enrollment]),
    forwardRef(() => CourseModule),
    CategoryTotalEnrollmentModule,
  ],
  controllers: [EnrollmentController],
  providers: [EnrollmentService],
  exports: [EnrollmentService],
})
export class EnrollmentModule {}
