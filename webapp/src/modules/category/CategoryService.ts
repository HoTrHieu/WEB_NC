import { CrudService } from "../../shared/services/CrudService";
import { ApiEndpoint } from '../../shared/constants/ApiEndpoint';
import { ICategory } from "../../shared/entities/ICategory";
import { EntityStatus } from "../../shared/enums/EntityStatus";

export class CategoryService {
  static all() {
    return CrudService.get(ApiEndpoint.category.all);
  }

  static topOfWeeks() {
    return CrudService.get(ApiEndpoint.category.topOfWeeks);
  }

  static add(category: ICategory) {
    return CrudService.create(ApiEndpoint.category.add, category);
  }

  static updateStatus(id: number, status: EntityStatus) {
    return CrudService.put(ApiEndpoint.category.udpateStatus(id), {status});
  }
}