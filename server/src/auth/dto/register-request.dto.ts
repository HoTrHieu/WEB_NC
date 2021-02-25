import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  Length,
} from 'class-validator';
import { AddUserRequest } from 'src/user/dto/add-user-reqeust.dto';

export class RegisterRequest extends AddUserRequest {
  @IsString()
  @Length(6)
  otp: string;
}
