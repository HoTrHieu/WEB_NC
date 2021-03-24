import { EntityStatus } from '../enums/entity-status';
import { Category } from './category.entity';
export declare class CategoryTotalEnrollment {
    categoryId: number;
    week: number;
    year: number;
    totalEnrollment: number;
    status: EntityStatus;
    category: Category;
    static of(categoryId: number, totalEnrollment?: number): CategoryTotalEnrollment;
}
