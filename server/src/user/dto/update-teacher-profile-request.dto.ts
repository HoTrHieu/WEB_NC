import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, MinLength } from 'class-validator';

export class UpdateTeacherProfileRequest {
  @IsString()
  @Length(2, 255)
  @ApiProperty({ minLength: 2, maxLength: 255 })
  bio: string;

  @IsString()
  @MinLength(2)
  @ApiProperty({ minLength: 2, maxLength: 255 })
  introduction: string;
}
