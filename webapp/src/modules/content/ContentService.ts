import { ApiEndpoint } from "../../shared/constants/ApiEndpoint";
import { IContent } from "../../shared/entities/IContent";
import { EntityStatus } from "../../shared/enums/EntityStatus";
import { CrudService } from "../../shared/services/CrudService";

export class ContentService {
  static add(content: IContent) {
    return CrudService.create(ApiEndpoint.content.add, content);
  }

  static update(id: number, content: IContent) {
    return CrudService.put(ApiEndpoint.content.update(id), content);
  }

  static updateStatus(id: number, status: EntityStatus) {
    return CrudService.put(ApiEndpoint.content.updateStatus(id), { status });
  }
}