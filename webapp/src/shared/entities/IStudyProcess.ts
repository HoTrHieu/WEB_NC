import { IContent } from "./IContent";
import { IEnrollment } from "./IEnrollment";
import { IEntity } from "./IEntity";

export interface IStudyProcess extends IEntity {
  courseId: number;
  userId: number;
  contentId: number;
  duration: number;
  done: boolean;
  enrollment: IEnrollment;
  content: IContent;
}