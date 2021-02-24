import { Category } from "src/shared/entities/category.entity";

export class TopCategoryOfWeek {
  totalEnrollment: number;
  category: Category;

  static of(totalEnrollment: number, category: Category) {
    const rs = new TopCategoryOfWeek();
    rs.totalEnrollment = totalEnrollment;
    rs.category = category;
    return rs;
  }
}