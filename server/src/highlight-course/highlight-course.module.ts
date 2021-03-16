import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HighlightCourse } from 'src/shared/entities/highlight-course.entity';
import { HighlightCourseService } from './highlight-course.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([HighlightCourse]),
  ],
  providers: [HighlightCourseService],
  exports: [HighlightCourseService],
})
export class HighlightCourseModule {}
