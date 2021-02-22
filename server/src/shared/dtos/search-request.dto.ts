import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, MaxLength, MinLength } from 'class-validator';
import { PagingRequest } from './paging-request.dto';

export class SearchRequest extends PagingRequest {
  @ApiPropertyOptional({ minLength: 2, maxLength: 255 })
  @MinLength(2)
  @MaxLength(255)
  @IsOptional()
  searchTerm?: string;

  get isSearchTermExists() {
    return !!this.searchTerm;
  }
}
