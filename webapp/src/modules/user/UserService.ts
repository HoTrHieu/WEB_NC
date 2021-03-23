import { ApiEndpoint } from "../../shared/constants/ApiEndpoint";
import { IUser } from "../../shared/entities/IUser";
import { CrudService } from "../../shared/services/CrudService";
import { IAddUserRequest } from "./types/AddUserRequest";
import { IPagingResponse } from "./types/IPagingResponse";
import { IContentSearchRequest } from "./types/SearchUserRequest";

export class UserService {
  static add(request: IAddUserRequest) {
    return CrudService.create(ApiEndpoint.user.add, request);
  }

  static async checkEmail(email: string) {
    const res = await CrudService.get(ApiEndpoint.user.checkEmail, { params: { email } });
    return res.exists;
  }

  static async checkUsername(username: string) {
    const res = await CrudService.get(ApiEndpoint.user.checkUsername, {
      params: { username },
    });
    return res.exists;
  }

  static search(request: IContentSearchRequest): Promise<IPagingResponse<IUser>> {
    return CrudService.get(ApiEndpoint.user.search, {
      params: request
    });
  }
  
  static async updateEmail(payload: any) {
    return CrudService.put(ApiEndpoint.user.updateEmail, payload);
  }

  static async updateFirstLastName(payload: any) {
    return CrudService.put(ApiEndpoint.user.updateFirstLastName, payload);
  }

  static async updateTeacherProfile(payload: any) {
    return CrudService.put(ApiEndpoint.user.updateTeacherProfile, payload);
  }

  static async updateStatus(data: any) {
    const res = await CrudService.put(ApiEndpoint.user.updateStatus(data.id), {status: data.newStatus});
    return res;
  }
}
