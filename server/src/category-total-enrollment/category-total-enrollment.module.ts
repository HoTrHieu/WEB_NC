import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryTotalEnrollment } from 'src/shared/entities/category-total-enrollment.entity';
import { CategoryTotalEnrollmentService } from './category-total-enrollment.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryTotalEnrollment])],
  providers: [CategoryTotalEnrollmentService],
  exports: [CategoryTotalEnrollmentService],
})
export class CategoryTotalEnrollmentModule {}
