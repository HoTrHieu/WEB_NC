import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class ChangePasswordRequest {
  @IsString()
  @MinLength(8)
  @MaxLength(255)
  @ApiProperty({ minLength: 8, maxLength: 255 })
  oldPassword: string;

  @IsString()
  @MinLength(8)
  @MaxLength(255)
  @ApiProperty({ minLength: 8, maxLength: 255 })
  newPassword: string;
}
