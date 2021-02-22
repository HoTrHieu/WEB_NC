import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class UpdateUserDisplayNameRequest {
  @IsString()
  @Length(4, 255)
  @ApiProperty({ minLength: 4, maxLength: 255 })
  displayName: string;
}
