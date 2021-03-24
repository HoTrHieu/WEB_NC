import { AuthedRequest } from 'src/auth/dto/authed-request';
import { BooleanResponse } from 'src/shared/dtos/boolean-response.dto';
import { PagingResponse } from 'src/shared/dtos/paging-response.dto';
import { StdResponse } from 'src/shared/dtos/std-response.dto';
import { UpdateStatusRequest } from 'src/shared/dtos/update-status-request.dto';
import { Course } from 'src/shared/entities/course.entity';
import { CourseEsService } from './course-es.service';
import { CourseService } from './course.service';
import { CourseSearchRequest } from './dto/course-search-request.dto';
import { CourseTopType } from './enums/course-top-type';
export declare class CourseController {
    private courseService;
    private courseEsService;
    constructor(courseService: CourseService, courseEsService: CourseEsService);
    search(request: CourseSearchRequest, req: AuthedRequest): Promise<PagingResponse<import("./dto/course-response.dto").CourseResponse>>;
    topOfWeeks(req: AuthedRequest): Promise<import("./dto/course-response.dto").CourseResponse[]>;
    top(type: CourseTopType, req: AuthedRequest): Promise<import("./dto/course-response.dto").CourseResponse[]>;
    getDetail(courseId: number, req: AuthedRequest): Promise<import("./dto/course-response.dto").CourseResponse>;
    add(course: Course, req: AuthedRequest): Promise<StdResponse<number>>;
    update(courseId: number, course: Course, req: AuthedRequest): Promise<BooleanResponse>;
    updateStatus(id: number, request: UpdateStatusRequest, req: AuthedRequest): Promise<BooleanResponse>;
    increaseTotalView(courseId: number): Promise<BooleanResponse>;
    syncToEs(): Promise<BooleanResponse>;
}
