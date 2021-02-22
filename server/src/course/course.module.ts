import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enrollment } from 'src/shared/entities/enrollment.entity';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Enrollment])
  ],
  controllers: [CourseController],
  providers: [CourseService],
  exports: [CourseService],
})
export class CourseModule {}

