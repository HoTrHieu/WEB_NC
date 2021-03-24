import { ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsOptional } from "class-validator";
import { SearchRequest } from "src/shared/dtos/search-request.dto";

export class SearchCategoryRequest extends SearchRequest {
  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  all?: boolean;
}