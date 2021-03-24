import { ICourse } from "./ICourse";
import { IEntity } from "./IEntity";
import { IStudyProcess } from "./IStudyProcess";

export interface IContent extends IEntity {
  id: number;
  title: string;
  description: string;
  order: number;
  preview: boolean;
  videoPath: string;
  duration: number;
  course: ICourse;
  studyProcesses: IStudyProcess[];
}