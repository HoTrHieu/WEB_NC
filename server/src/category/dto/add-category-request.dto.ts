import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class AddCategoryRequest {
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  @ApiProperty({ minLength: 2, maxLength: 100 })
  name: string;
}
