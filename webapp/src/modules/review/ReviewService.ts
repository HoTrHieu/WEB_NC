import { ApiEndpoint } from "../../shared/constants/ApiEndpoint";
import { CrudService } from "../../shared/services/CrudService";
import { IPagingRequest } from "../../types/IPagingRequest";
import { ReviewRequest } from "./types/ReviewRequest";

export class ReviewService {
  static paginate(courseId: number, request: IPagingRequest) {
    return CrudService.get(ApiEndpoint.review.paginate(courseId), {
      params: request
    });
  }

  static review(courseId: number, review: ReviewRequest) {
    return CrudService.create(ApiEndpoint.review.add(courseId), review);
  }
}