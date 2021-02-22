import {
  Body,
  CacheInterceptor,
  CACHE_MANAGER,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Cache } from 'cache-manager';
import { Role } from 'src/shared/decorators/role.decorator';
import { BooleanResponse } from 'src/shared/dtos/boolean-response.dto';
import { StdResponse } from 'src/shared/dtos/std-response.dto';
import { UpdateStatusRequest } from 'src/shared/dtos/update-status-request.dto';
import { Category } from 'src/shared/entities/category.entity';
import { StdResponseCode } from 'src/shared/enums/std-response-code';
import { UserRole } from 'src/shared/enums/user-role';
import { CategoryService } from './category.service';
import { AddCategoryRequest } from './dto/add-category-request.dto';

@ApiTags('Category')
@Controller('/category')
export class CategoryController {
  constructor(
    private categoryService: CategoryService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Get('/all')
  @ApiResponse({
    type: Category,
    isArray: true,
  })
  @ApiBearerAuth()
  @UseInterceptors(CacheInterceptor)
  findAllCategory() {
    return this.categoryService.findAll();
  }

  @Role(UserRole.ADMIN)
  @Post()
  @ApiResponse({
    type: StdResponse,
  })
  @ApiBearerAuth()
  async addCategory(@Body() request: AddCategoryRequest) {
    const category = await this.categoryService.addCategory(request.name);
    this.cacheManager.del('/all');
    return StdResponse.of(StdResponseCode.SUCCESS, category.id);
  }

  @Role(UserRole.ADMIN)
  @Put('/update-status/:id')
  @ApiResponse({
    type: BooleanResponse,
  })
  @ApiBearerAuth()
  async upcateStatus(
    @Param('id') id: number,
    @Body() request: UpdateStatusRequest,
  ) {
    const isSuccess = await this.categoryService.updateStatus(
      id,
      request.status,
    );
    if (isSuccess) {
      this.cacheManager.del('/all');
    }
    return BooleanResponse.of(isSuccess);
  }
}
