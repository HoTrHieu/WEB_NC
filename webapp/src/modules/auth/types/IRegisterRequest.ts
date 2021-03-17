import { IAddUserRequest } from "../../user/types/AddUserRequest";

export interface IRegisterRequest extends IAddUserRequest {
  otp: string;
}