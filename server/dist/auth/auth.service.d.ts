import { OtpService } from 'src/otp/otp.service';
import { UserService } from 'src/user/user.service';
import { AuthUser } from './dto/auth-user.dto';
import { LoginResponse } from './dto/login-response.dto';
import { RegisterRequest } from './dto/register-request.dto';
import { TokenService } from './token/token.service';
import { Profile } from 'passport-google-oauth20';
export declare class AuthService {
    private userService;
    private tokenService;
    private otpService;
    constructor(userService: UserService, tokenService: TokenService, otpService: OtpService);
    validateLogin(username: string, password: string): Promise<import("../shared/entities/user.entity").User>;
    validateGoogleLogin(profile: Profile): Promise<import("../shared/entities/user.entity").User>;
    login(user: AuthUser): Promise<LoginResponse>;
    getProfile(authUser: any): Promise<import("../shared/entities/user.entity").User>;
    changePassword(id: number, oldPassword: string, newPassword: string): Promise<boolean>;
    register(request: RegisterRequest): Promise<any>;
}
