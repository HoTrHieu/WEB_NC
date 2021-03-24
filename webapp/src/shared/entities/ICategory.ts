import { ICategoryTotalEnrollment } from "./ICategoryTotalEnrollment";
import { ICourse } from "./ICourse";
import { IEntity } from "./IEntity";

export interface ICategory extends IEntity {
  id: number;
  name: string;
  slug: string;
  parentId: number;
  isEmpty: boolean;
  children: ICategory[];
  categoryTotalEnrollments: ICategoryTotalEnrollment[];
  parent: ICategory;
  courses: ICourse[];
}