import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class SendOtpMailRequest {
  @IsString()
  @Length(1, 255)
  @ApiProperty()
  name: string;

  @IsEmail()
  @Length(1, 255)
  @ApiProperty()
  email: string;
}