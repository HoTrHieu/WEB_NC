import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EsHelperModule } from 'src/es-helper/es-helper.module';
import { Course } from 'src/shared/entities/course.entity';
import { esModule } from 'src/shared/modules/elasticsearch.module';
import { CourseEsService } from './course-es.service';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Course]),
    esModule,
    EsHelperModule
  ],
  controllers: [CourseController],
  providers: [CourseService, CourseEsService],
  exports: [CourseService, CourseEsService],
})
export class CourseModule {}
