import { UserRole } from "../enums/UserRole";
import { ICourse } from "./ICourse";
import { IEnrollment } from "./IEnrollment";
import { IEntity } from "./IEntity";
import { IWatchList } from "./IWatchList";

export interface IUser extends IEntity {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  passwordHash: string;
  role: UserRole;
  updatedEmailDate: Date;
  createdCourses: ICourse[];
  watchLists: IWatchList[];
  enrollments: IEnrollment[];
}