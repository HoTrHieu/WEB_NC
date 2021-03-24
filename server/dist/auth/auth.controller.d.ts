import { ConfigService } from '@nestjs/config';
import { BooleanResponse } from 'src/shared/dtos/boolean-response.dto';
import { StdResponse } from 'src/shared/dtos/std-response.dto';
import { User } from 'src/shared/entities/user.entity';
import { AuthService } from './auth.service';
import { AuthedRequest } from './dto/authed-request';
import { ChangePasswordRequest } from './dto/change-password-request.dto';
import { LoginResponse } from './dto/login-response.dto';
import { RegisterRequest } from './dto/register-request.dto';
import { TokenService } from './token/token.service';
export declare class AuthController {
    private authService;
    private tokenService;
    private configService;
    constructor(authService: AuthService, tokenService: TokenService, configService: ConfigService);
    register(request: RegisterRequest): Promise<StdResponse<any>>;
    login(req: AuthedRequest): Promise<LoginResponse>;
    googleLogin(req: any): Promise<void>;
    googleRedirect(req: any, res: any): Promise<void>;
    refreshAccessToken(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(): void;
    getProfile(req: AuthedRequest): Promise<User>;
    changePassword(body: ChangePasswordRequest, req: any): Promise<BooleanResponse>;
}
