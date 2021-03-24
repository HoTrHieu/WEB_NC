import { UserRole } from "../../../shared/enums/UserRole";
import { IAddUserRequest } from "./AddUserRequest";

export interface IAddUserWithRoleRequest extends IAddUserRequest {
  role: UserRole;
}