import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";

export class CheckUsernameRequest {
  @ApiProperty({ minLength: 4, maxLength: 255 })
  @IsString()
  @Length(4, 255)
  username: string;
}