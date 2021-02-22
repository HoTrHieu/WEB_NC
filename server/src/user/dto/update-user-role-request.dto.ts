import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { UserRole } from 'src/shared/enums/user-role';
import { EnumUtils } from 'src/shared/utils/enum.util';

export class UpdateUserRoleRequest {
  @ApiProperty({ enum: EnumUtils.values(UserRole) })
  @IsEnum(UserRole)
  role: UserRole;
}
