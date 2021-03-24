import { AuthedRequest } from 'src/auth/dto/authed-request';
import { BooleanResponse } from 'src/shared/dtos/boolean-response.dto';
import { PagingRequest } from 'src/shared/dtos/paging-request.dto';
import { PagingResponse } from 'src/shared/dtos/paging-response.dto';
import { ReviewRequest } from './dto/review-request.dto';
import { ReviewService } from './review.service';
export declare class ReviewController {
    private reviewService;
    constructor(reviewService: ReviewService);
    paginate(courseId: number, request: PagingRequest): Promise<PagingResponse<import("../shared/entities/review.entity").Review>>;
    review(courseId: number, req: AuthedRequest, body: ReviewRequest): Promise<BooleanResponse>;
}
