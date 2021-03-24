import { ICourse } from "./ICourse";
import { IEntity } from "./IEntity";
import { IUser } from "./IUser";

export interface IReview extends IEntity {
  userId: number;
  courseId: number;
  star: number;
  feedback: string;
  user: IUser;
  course: ICourse;
}