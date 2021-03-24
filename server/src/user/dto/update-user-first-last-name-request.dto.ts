import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class UpdateUserFirstLastNameRequest {
  @IsString()
  @Length(4, 255)
  @ApiProperty({ minLength: 4, maxLength: 255 })
  firstName: string;

  @IsString()
  @Length(4, 255)
  @ApiProperty({ minLength: 4, maxLength: 255 })
  lastName: string;
}
