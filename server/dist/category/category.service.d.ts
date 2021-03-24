import { Category } from 'src/shared/entities/category.entity';
import { EntityStatus } from 'src/shared/enums/entity-status';
import { Repository } from 'typeorm';
import { TopCategoryOfWeek } from './dto/top-category-of-week.dto';
export declare class CategoryService {
    private categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    findAll(): Promise<Category[]>;
    findOne(categoryId: number): Promise<Category>;
    findParentId(categoryId: number): Promise<any>;
    findTopOfWeek(limit?: number): Promise<TopCategoryOfWeek[]>;
    findOneByName(name: string): Promise<Category>;
    addCategory(name: string): Promise<Category>;
    updateStatus(id: number, status: EntityStatus): Promise<boolean>;
}
