import { ApiEndpoint } from "../../shared/constants/ApiEndpoint";
import { ICourse } from "../../shared/entities/ICourse";
import { CrudService } from "../../shared/services/CrudService";
import { IPagingResponse } from "../../types/IPagingResponse";
import { CourseTopType } from "./enums/CourseTopType";
import { ICourseSearchRequest } from "./types/CourseSearchRequest";

export class CourseService {
  static search(request: ICourseSearchRequest): Promise<IPagingResponse<ICourse>> {
    return CrudService.get(ApiEndpoint.course.search, {
      params: request
    });
  }

  static topOfWeeks() {
    return CrudService.get(ApiEndpoint.course.topOfWeeks);
  }

  static top(type: CourseTopType) {
    return CrudService.get(ApiEndpoint.course.top(type));
  }

  static add(course: ICourse) {
    return CrudService.create(ApiEndpoint.course.add, course);
  }

  static getDetail(id: number) {
    return CrudService.get(ApiEndpoint.course.getDetail(id));
  }
}