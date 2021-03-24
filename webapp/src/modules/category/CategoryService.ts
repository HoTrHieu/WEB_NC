import { CrudService } from "../../shared/services/CrudService";
import { ApiEndpoint } from '../../shared/constants/ApiEndpoint';
import { ICategory } from "../../shared/entities/ICategory";
import { EntityStatus } from "../../shared/enums/EntityStatus";
import { ISearchCategoryRequest } from "./types/SearchCategoryRequest";

export class CategoryService {
  static all() {
    return CrudService.get(ApiEndpoint.category.all);
  }

  static search(request: ISearchCategoryRequest) {
    return CrudService.get(ApiEndpoint.category.search, { params: request });
  }

  static topOfWeeks() {
    return CrudService.get(ApiEndpoint.category.topOfWeeks);
  }

  static add(category: ICategory) {
    return CrudService.create(ApiEndpoint.category.add, category);
  }

  static update(category: ICategory) {
    return CrudService.put(ApiEndpoint.category.update(category.id), category);
  }

  static updateStatus(id: number, status: EntityStatus) {
    return CrudService.put(ApiEndpoint.category.udpateStatus(id), {status});
  }

  static async checkName(name: string) {
    const res = await CrudService.get(ApiEndpoint.category.checkName, { params: { name } });
    return res.exists;
  }

  static findOne(id: number) {
    return CrudService.get(ApiEndpoint.category.findOne(id));
  }
}