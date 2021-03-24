import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Cache } from 'cache-manager';
import { UserRole } from 'src/shared/enums/user-role';
export declare class TokenService {
    private cacheManager;
    private config;
    private jwtService;
    private readonly RTK_TTL;
    private readonly RTK_PREFIX;
    constructor(cacheManager: Cache, config: ConfigService, jwtService: JwtService);
    createTokens(userId: number, role: UserRole): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    createRefreshToken(userId: number, role: UserRole): Promise<string>;
    getAccessTokenFromRefreshToken(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    deleteRefreshToken(refreshToken: string): Promise<any>;
}
