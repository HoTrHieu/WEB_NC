import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString, Length } from 'class-validator';
import { UserRole } from 'src/shared/enums/user-role';
import { EnumUtils } from 'src/shared/utils/enum.util';

export class AddUserRequest {
  @ApiProperty({ minLength: 4, maxLength: 255 })
  @IsString()
  @Length(4, 100)
  email: string;

  @ApiProperty({ minLength: 4, maxLength: 255 })
  @IsString()
  @Length(4, 100)
  displayName: string;

  @ApiProperty({ minLength: 8, maxLength: 255 })
  @IsString()
  @Length(8, 255)
  password: string;

  @IsEnum(UserRole)
  @ApiProperty({ type: EnumUtils.values(UserRole) })
  role: UserRole;
}
