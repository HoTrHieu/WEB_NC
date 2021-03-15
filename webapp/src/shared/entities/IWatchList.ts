import { ICourse } from "./ICourse";
import { IEntity } from "./IEntity";
import { IUser } from "./IUser";

export interface IWatchList extends IEntity {
  courseId: number;
  userId: number;
  course: ICourse;
  user: IUser;
}