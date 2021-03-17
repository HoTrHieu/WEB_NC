import { ApiEndpoint } from "../../shared/constants/ApiEndpoint";
import { CrudService } from "../../shared/services/CrudService";
import { IAddUserRequest } from "./types/AddUserRequest";

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
}
