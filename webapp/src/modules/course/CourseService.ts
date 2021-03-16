import { ApiEndpoint } from "../../shared/constants/ApiEndpoint";
import { ICourse } from "../../shared/entities/ICourse";
import { CrudService } from "../../shared/services/CrudService";
import { IContentSearchRequest } from "./types/ContentSearchRequest";

export class CourseService {
  static search(request: IContentSearchRequest) {
    return CrudService.get(ApiEndpoint.course.search, {
      params: request
    });
  }

  static add(course: ICourse) {
    return CrudService.create(ApiEndpoint.course.add, course);
  }

  static getOne(id: number) {

  }
}