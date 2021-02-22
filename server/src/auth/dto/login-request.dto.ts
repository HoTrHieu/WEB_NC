import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class LoginRequest {
  @IsString()
  @MinLength(4)
  @MaxLength(255)
  @ApiProperty({ minLength: 4, maxLength: 255 })
  username: string;

  @IsString()
  @ApiProperty({ minLength: 4, maxLength: 255 })
  @MinLength(8)
  @MaxLength(255)
  password: string;

  static of(username: string, password: string) {
    const loginRequest = new LoginRequest();
    loginRequest.username = username;
    loginRequest.password = password;
    return loginRequest;
  }
}
