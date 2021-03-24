import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional, Min } from 'class-validator';
import { SearchRequest } from 'src/shared/dtos/search-request.dto';
import { UserRole } from 'src/shared/enums/user-role';

export class SearchUserRequest extends SearchRequest {
  @ApiPropertyOptional()
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  @IsOptional()
  role?: UserRole;

  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  all?: boolean;

  get isRoleExists() {
    return !!this.role;
  }
}
