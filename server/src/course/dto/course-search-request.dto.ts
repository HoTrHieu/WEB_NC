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

  @ApiPropertyOptional({ type: Number })
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  @IsOptional()
  fromPrice?: number;

  @ApiPropertyOptional({ type: Number })
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  @IsOptional()
  toPrice?: number;

  @ApiPropertyOptional({ type: Number })
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  @IsOptional()
  fromStar?: number;

  @ApiPropertyOptional({ type: Number })
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  @IsOptional()
  toStar?: number;

  @IsEnum(CourseOrderBy)
  @ApiPropertyOptional({ enum: CourseOrderBy })
  @IsOptional()
  orderBy?: CourseOrderBy;

  @IsEnum(OrderDirection)
  @ApiPropertyOptional({ enum: OrderDirection })
  @IsOptional()
  orderDirection?: OrderDirection;

  getCategoryIds() {
    return RequestUtil.parseArray(this.categoryIds);
  }

  get isSort() {
    return !!this.orderBy && !!this.orderDirection;
  }

  get isCategoryIdsExists() {
    const categoryIds = this.getCategoryIds();
    return !!categoryIds && categoryIds.length > 0;
  }

  get isFromPriceExists() {
    return !isNaN(this.fromPrice);
  }

  get isToPriceExists() {
    return !isNaN(this.toPrice);
  }

  get isFromStarExists() {
    return !isNaN(this.fromStar);
  }

  get isToStarExists() {
    return !isNaN(this.toStar);
  }

  get isSearching() {
    return (
      this.isCategoryIdsExists ||
      this.isSearchTermExists ||
      this.isFromPriceExists ||
      this.isToPriceExists ||
      this.isFromStarExists ||
      this.isToStarExists
    );
  }
}
