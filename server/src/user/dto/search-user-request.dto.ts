import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';
import { PagingRequest } from 'src/common/dtos/paging-request.dto';

export class SearchUserRequest extends PagingRequest {
  @IsString()
  @ApiProperty({ minLength: 1, maxLength: 255 })
  @Length(1, 255)
  searchTerm: string;
}
