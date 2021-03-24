import { CourseService } from 'src/course/course.service';
import { EnrollmentService } from 'src/enrollment/enrollment.service';
import { PagingRequest } from 'src/shared/dtos/paging-request.dto';
import { Review } from 'src/shared/entities/review.entity';
import { Repository } from 'typeorm';
import { ReviewRequest } from './dto/review-request.dto';
export declare class ReviewService {
    private reviewRepository;
    private enrollmentService;
    private courseService;
    private readonly logger;
    constructor(reviewRepository: Repository<Review>, enrollmentService: EnrollmentService, courseService: CourseService);
    paginate(courseId: number, request: PagingRequest): Promise<import("../shared/dtos/paging-response.dto").PagingResponse<Review>>;
    findAvgStar(courseId: number): Promise<any>;
    review(courseId: number, userId: number, body: ReviewRequest): Promise<Review>;
}
