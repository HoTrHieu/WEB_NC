import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { UserRole } from 'src/shared/enums/user-role';
import { ClassUtils } from 'src/shared/utils/class.util';
import { AddUserRequest } from './add-user-reqeust.dto';

export class AddUserWithRoleRequest extends AddUserRequest {
  @IsEnum(UserRole)
  @ApiProperty({ enum: UserRole })
  role: UserRole;

  static of(addUserRequest: AddUserRequest): AddUserWithRoleRequest {
    return ClassUtils.copyFields(addUserRequest, new AddUserWithRoleRequest());
  }
}
