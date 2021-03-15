import { ICategoryTotalEnrollment } from "./ICategoryTotalEnrollment";
import { ICourse } from "./ICourse";
import { IEntity } from "./IEntity";

export interface ICategory extends IEntity {
  id: number;
  name: string;
  parentId: number;
  children: ICategory[];
  categoryTotalEnrollments: ICategoryTotalEnrollment[];
  parent: ICategory;
  courses: ICourse[];
}