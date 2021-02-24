import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/shared/entities/course.entity';
import { CourseEsService } from './course-es.service';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Course])
  ],
  controllers: [CourseController],
  providers: [CourseService, CourseEsService],
  exports: [CourseService, CourseEsService],
})
export class CourseModule {}

