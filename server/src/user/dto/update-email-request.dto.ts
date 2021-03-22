import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class UpdateEmailRequest {
  @ApiProperty({ minLength: 4, maxLength: 255 })
  @IsEmail()
  @Length(4, 255)
  email: string;

  @IsString()
  @Length(6)
  otp: string;
}