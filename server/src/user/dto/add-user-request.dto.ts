import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { RegisterRequest } from 'src/auth/dto/register-request.dto';
import { UserRole } from 'src/shared/enums/user-role';
import { ClassUtils } from 'src/shared/utils/class.util';
import { EnumUtils } from 'src/shared/utils/enum.util';

export class AddUserRequest extends RegisterRequest {
  @IsEnum(UserRole)
  @ApiProperty({ type: EnumUtils.values(UserRole) })
  role: UserRole;

  static of(registerRequest: RegisterRequest): AddUserRequest {
    return ClassUtils.copyFields(registerRequest, new AddUserRequest());
  }
}
