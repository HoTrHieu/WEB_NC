import { ICategory } from "./ICategory";
import { IEntity } from "./IEntity";

export interface ICategoryTotalEnrollment extends IEntity {
  categoryId: number;
  week: number;
  year: number;
  totalEnrollment: number;
  category: ICategory;
}