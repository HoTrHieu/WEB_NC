import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { RegisterRequest } from 'src/auth/dto/register-request.dto';
import { UserRole } from 'src/shared/enums/user-role';
import { ClassUtils } from 'src/shared/utils/class.util';

export class AddUserRequest extends RegisterRequest {
  @IsEnum(UserRole)
  @ApiProperty({ enum: UserRole })
  role: UserRole;

  static of(registerRequest: RegisterRequest): AddUserRequest {
    return ClassUtils.copyFields(registerRequest, new AddUserRequest());
  }
}
