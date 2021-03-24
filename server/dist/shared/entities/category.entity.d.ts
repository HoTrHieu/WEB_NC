import { EntityStatus } from '../enums/entity-status';
import { CategoryTotalEnrollment } from './category-total-enrollment.entity';
import { Course } from './course.entity';
export declare class Category {
    id: number;
    name: string;
    slug: string;
    parentId: number;
    status: EntityStatus;
    updatedDate: Date;
    createdDate: Date;
    children: Category[];
    categoryTotalEnrollments: CategoryTotalEnrollment[];
    parent: Category;
    courses: Course[];
}
