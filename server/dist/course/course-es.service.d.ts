import { ConfigService } from '@nestjs/config';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { CategoryService } from 'src/category/category.service';
import { EsHelperService } from 'src/es-helper/es-helper.service';
import { Course } from 'src/shared/entities/course.entity';
import { EntityStatus } from 'src/shared/enums/entity-status';
import { CourseSearchRequest } from './dto/course-search-request.dto';
export declare class CourseEsService {
    private esService;
    private esHelper;
    private config;
    private categoryService;
    private readonly ES_INDEX_NAME;
    private readonly logger;
    constructor(esService: ElasticsearchService, esHelper: EsHelperService, config: ConfigService, categoryService: CategoryService);
    search(request: CourseSearchRequest): Promise<{
        total: any;
        courseIds: any;
    }>;
    upsertCourse(course: Course): Promise<boolean>;
    partialUpdate(id: number, doc: any): Promise<boolean>;
    updateStatus(id: number, status: EntityStatus): Promise<boolean>;
    syncToEs(courses: Course[]): Promise<boolean>;
}
