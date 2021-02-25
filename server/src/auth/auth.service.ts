import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { OtpService } from 'src/otp/otp.service';
import { UserRole } from 'src/shared/enums/user-role';
import { AddUserWithRoleRequest } from 'src/user/dto/add-user-with-role-request.dto';
import { UserService } from 'src/user/user.service';
import { AuthUser } from './dto/auth-user.dto';
import { LoginResponse } from './dto/login-response.dto';
import { RegisterRequest } from './dto/register-request.dto';
import { TokenService } from './token/token.service';
import { Profile  } from 'passport-google-oauth20';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private tokenService: TokenService,
    private otpService: OtpService
  ) {}

  async validateLogin(username: string, password: string) {
    const user = await this.userService.findOneByUsername(username);
    if (!user) {
      throw new UnauthorizedException();
    }
    const isValidPassword = await this.userService.comparePassword(
      password,
      user.passwordHash,
    );
    if (isValidPassword) {
      throw new UnauthorizedException();
    }
    return user;
  }

  async validateGoogleLogin(profile: Profile) {
    const email = profile.emails[0];
    let user = await this.userService.findOneByEmail(email.value);
    if (!user) {
      user = await this.userService.addUser(AddUserWithRoleRequest.ofGoogleProfile(profile), false);
    }
    return user;
  }

  async login(user: AuthUser) {
    const token = await this.tokenService.createTokens(user.id, user.role);
    return LoginResponse.of(token.accessToken, token.refreshToken);
  }

  getProfile(authUser: any) {
    return this.userService.findOneById(authUser.id);
  }

  async changePassword(id: number, oldPassword: string, newPassword: string) {
    const user = await this.userService.findOneById(id);
    if (!user) {
      return false;
    }
    const isValidPassword = await this.userService.comparePassword(
      oldPassword,
      user.passwordHash,
    );
    if (!isValidPassword) {
      return false;
    }
    return this.userService.updatePassword(id, newPassword);
  }

  async register(request: RegisterRequest) {
    const validOtp = await this.otpService.checkOtp(request.otp, request.email);
    if (!validOtp) {
      throw new BadRequestException("OTP is invalid");
    }
    delete request.otp;
    const addUserRequest = AddUserWithRoleRequest.of(request);
    addUserRequest.role = UserRole.NORMAL;
    return this.userService.addUser(addUserRequest);
  }
}
