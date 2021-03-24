import { ICourse } from "./ICourse";
import { IEntity } from "./IEntity";
import { IStudyProcess } from "./IStudyProcess";
import { IUser } from "./IUser";

export interface IEnrollment extends IEntity {
  courseId: number;
  userId: number;
  amount: number;
  course: ICourse;
  user: IUser;
  studyProcesses: IStudyProcess[];
}