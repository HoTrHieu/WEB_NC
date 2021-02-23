import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, Min } from 'class-validator';
import { SearchRequest } from 'src/shared/dtos/search-request.dto';
import { RequestUtil } from 'src/shared/utils/request.util';

export class CourseSearchRequest extends SearchRequest {
  @ApiPropertyOptional({ type: [Number] })
  @IsNumber({}, { each: true })
  @Min(1, { each: true })
  @Type(() => Number)
  @IsOptional()
  categoryIds?: number[];

  getCategoryIds() {
    return RequestUtil.parseArray(this.categoryIds);
  }

  get isCategoryIdsExists() {
    const categoryIds = this.getCategoryIds();
    return !!categoryIds && categoryIds.length > 0;
  }

  get isSearching() {
    return this.isCategoryIdsExists;
  }
}
