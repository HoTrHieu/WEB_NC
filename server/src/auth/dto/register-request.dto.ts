import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterRequest {
  @ApiProperty({ minLength: 4, maxLength: 255 })
  @IsString()
  @Length(4, 255)
  username: string;

  @ApiProperty({ minLength: 4, maxLength: 255 })
  @IsEmail()
  @Length(4, 255)
  email: string;

  @ApiProperty({ minLength: 8, maxLength: 255 })
  @IsString()
  @Length(8, 255)
  password: string;

  @IsString()
  @ApiProperty({ minLength: 4, maxLength: 255 })
  @MinLength(4)
  @MaxLength(255)
  firstName: string;

  @IsString()
  @ApiProperty({ minLength: 4, maxLength: 255 })
  @MinLength(4)
  @MaxLength(255)
  lastName: string;
}
