import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from 'src/category/category.module';
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
    EsHelperModule,
    forwardRef(() => CategoryModule)
  ],
  controllers: [CourseController],
  providers: [CourseService, CourseEsService],
  exports: [CourseService, CourseEsService],
})
export class CourseModule {}
