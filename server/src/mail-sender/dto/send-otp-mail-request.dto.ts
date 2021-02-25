import { IsEmail, IsString, Length } from "class-validator";

export class SendOtpMailRequest {
  @IsString()
  @Length(1, 255)
  name: string;

  @IsEmail()
  @Length(1, 255)
  email: string;
}