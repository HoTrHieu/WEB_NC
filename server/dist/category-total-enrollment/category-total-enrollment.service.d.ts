import { CategoryTotalEnrollment } from 'src/shared/entities/category-total-enrollment.entity';
import { Repository } from 'typeorm';
export declare class CategoryTotalEnrollmentService {
    private repository;
    constructor(repository: Repository<CategoryTotalEnrollment>);
    increase(categoryId: number): Promise<import("typeorm").InsertResult>;
}
