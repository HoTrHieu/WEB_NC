import { ApiEndpoint } from "../../shared/constants/ApiEndpoint";
import { CrudService } from "../../shared/services/CrudService";

export class EnrollmentService {
  static getDetail(courseId: number) {
    return CrudService.get(ApiEndpoint.enrollment.getDetail(courseId));
  }

  static enroll(courseId: number) {
    return CrudService.create(ApiEndpoint.enrollment.enroll(courseId), null);
  }
}