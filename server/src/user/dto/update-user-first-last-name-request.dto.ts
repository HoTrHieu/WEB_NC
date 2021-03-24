import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class UpdateUserFirstLastNameRequest {
  @IsString()
  @Length(1, 255)
  @ApiProperty({ minLength: 1, maxLength: 255 })
  firstName: string;

  @IsString()
  @Length(1, 255)
  @ApiProperty({ minLength: 1, maxLength: 255 })
  lastName: string;
}
