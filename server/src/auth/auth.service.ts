import { Injectable } from '@nestjs/common';
import { User } from 'src/shared/entities/user.entity';
import { UserRole } from 'src/shared/enums/user-role';
import { AddUserRequest } from 'src/user/dto/add-user-request.dto';
import { UserService } from 'src/user/user.service';
import { LoginResponse } from './dto/login-response.dto';
import { RegisterRequest } from './dto/register-request.dto';
import { TokenService } from './token/token.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private tokenService: TokenService,
  ) {}

  async validateLogin(username: string, password: string) {
    const user = await this.userService.findOneByUsername(username);
    if (!user) {
      return null;
    }
    const isValidPassword = await this.userService.comparePassword(
      password,
      user.passwordHash,
    );
    if (isValidPassword) {
      return user;
    }
    return null;
  }

  async login(user: User) {
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
    const addUserRequest = AddUserRequest.of(request);
    addUserRequest.role = UserRole.NORMAL;
    return this.userService.addUser(addUserRequest);
  }
}
