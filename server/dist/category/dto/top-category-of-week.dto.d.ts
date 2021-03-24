import { Category } from "src/shared/entities/category.entity";
export declare class TopCategoryOfWeek {
    totalEnrollment: number;
    category: Category;
    static of(totalEnrollment: number, category: Category): TopCategoryOfWeek;
}
