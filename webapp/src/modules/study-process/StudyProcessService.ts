import { ApiEndpoint } from "../../shared/constants/ApiEndpoint";
import { CrudService } from "../../shared/services/CrudService";

export class StudyProcessService {
  static findOne(courseId: number, contentId: number) {
    return CrudService.get(ApiEndpoint.studyProcess.findOne(courseId), {
      params: { contentId },
    });
  }

  static findByCourseId(courseId: number) {
    return CrudService.get(ApiEndpoint.studyProcess.findByCourseId(courseId));
  }

  static update(courseId: number, contentId: number, duration: number) {
    return CrudService.put(ApiEndpoint.studyProcess.update(courseId), {
      contentId,
      duration,
    });
  }
}
