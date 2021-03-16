import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, Min } from 'class-validator';
import { SearchRequest } from 'src/shared/dtos/search-request.dto';
import { OrderDirection } from 'src/shared/enums/order-direction';
import { RequestUtil } from 'src/shared/utils/request.util';
import { CourseOrderBy } from '../enums/course-order-by';

export class CourseSearchRequest extends SearchRequest {
  @ApiPropertyOptional({ type: [Number] })
  @IsNumber({}, { each: true })
  @Min(1, { each: true })
  @Type(() => Number)
  @IsOptional()
  categoryIds?: number[];

  @IsEnum(CourseOrderBy)
  @ApiProperty({ enum: CourseOrderBy })
  orderBy: CourseOrderBy;

  @IsEnum(OrderDirection)
  @ApiProperty({ enum: OrderDirection })
  orderDirection: OrderDirection;

  getCategoryIds() {
    return RequestUtil.parseArray(this.categoryIds);
  }

  get isCategoryIdsExists() {
    const categoryIds = this.getCategoryIds();
    return !!categoryIds && categoryIds.length > 0;
  }

  get isSearching() {
    return this.isCategoryIdsExists || this.isSearchTermExists;
  }
}
