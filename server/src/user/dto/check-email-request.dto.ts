import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, Length } from "class-validator";

export class CheckEmailRequest {
  @ApiProperty({ minLength: 4, maxLength: 255 })
  @IsEmail()
  @Length(4, 255)
  email: string;
}