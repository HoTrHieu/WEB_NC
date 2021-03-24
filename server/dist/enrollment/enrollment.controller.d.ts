import { AuthedRequest } from 'src/auth/dto/authed-request';
import { CategoryTotalEnrollmentService } from 'src/category-total-enrollment/category-total-enrollment.service';
import { CourseService } from 'src/course/course.service';
import { StdResponse } from 'src/shared/dtos/std-response.dto';
import { Enrollment } from 'src/shared/entities/enrollment.entity';
import { EnrollmentService } from './enrollment.service';
export declare class EnrollmentController {
    private enrollmentService;
    private courseService;
    private categoryTotalEnrollmentService;
    private readonly logger;
    constructor(enrollmentService: EnrollmentService, courseService: CourseService, categoryTotalEnrollmentService: CategoryTotalEnrollmentService);
    getDetail(courseId: number, req: AuthedRequest): Promise<Enrollment>;
    enroll(courseId: number, req: AuthedRequest): Promise<StdResponse<boolean>>;
}
