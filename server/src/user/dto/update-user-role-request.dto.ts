import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { UserRole } from 'src/common/entities/user.entity';
import { EnumUtils } from 'src/common/utils/enum.util';

export class UpdateUserRoleRequest {
  @ApiProperty({ enum: EnumUtils.values(UserRole) })
  @IsEnum(UserRole)
  role: UserRole;
}
