import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { SearchRequest } from 'src/shared/dtos/search-request.dto';
import { UserRole } from 'src/shared/enums/user-role';

export class SearchUserRequest extends SearchRequest {
  @ApiPropertyOptional({ enum: UserRole })
  @IsEnum(UserRole)
  @IsOptional()
  role: UserRole
}
