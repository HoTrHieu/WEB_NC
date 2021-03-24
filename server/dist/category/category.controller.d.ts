import { Cache } from 'cache-manager';
import { BooleanResponse } from 'src/shared/dtos/boolean-response.dto';
import { StdResponse } from 'src/shared/dtos/std-response.dto';
import { UpdateStatusRequest } from 'src/shared/dtos/update-status-request.dto';
import { Category } from 'src/shared/entities/category.entity';
import { CategoryService } from './category.service';
import { AddCategoryRequest } from './dto/add-category-request.dto';
import { TopCategoryOfWeek } from './dto/top-category-of-week.dto';
export declare class CategoryController {
    private categoryService;
    private cacheManager;
    constructor(categoryService: CategoryService, cacheManager: Cache);
    findAllCategory(): Promise<Category[]>;
    findTopOfWeek(): Promise<TopCategoryOfWeek[]>;
    addCategory(request: AddCategoryRequest): Promise<StdResponse<number>>;
    updateStatus(id: number, request: UpdateStatusRequest): Promise<BooleanResponse>;
}
