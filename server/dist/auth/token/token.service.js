"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const crypto_1 = require("crypto");
const user_role_1 = require("../../shared/enums/user-role");
const auth_user_dto_1 = require("../dto/auth-user.dto");
let TokenService = class TokenService {
    constructor(cacheManager, config, jwtService) {
        this.cacheManager = cacheManager;
        this.config = config;
        this.jwtService = jwtService;
        this.RTK_PREFIX = 'rtk_';
        this.RTK_TTL = this.config.get('jwt.refreshToken.ttl');
    }
    async createTokens(userId, role) {
        return {
            accessToken: this.jwtService.sign({ sub: userId, role }),
            refreshToken: await this.createRefreshToken(userId, role),
        };
    }
    async createRefreshToken(userId, role) {
        const refreshToken = crypto_1.randomBytes(64).toString('hex');
        await this.cacheManager.set(this.RTK_PREFIX + refreshToken, auth_user_dto_1.AuthUser.of(userId, role), {
            ttl: this.RTK_TTL,
        });
        return refreshToken;
    }
    async getAccessTokenFromRefreshToken(refreshToken) {
        const user = await this.cacheManager.get(this.RTK_PREFIX + refreshToken);
        if (!user) {
            throw new common_1.NotFoundException('Refresh token not found');
        }
        await this.deleteRefreshToken(refreshToken);
        return this.createTokens(user.id, user.role);
    }
    deleteRefreshToken(refreshToken) {
        return this.cacheManager.del(this.RTK_PREFIX + refreshToken);
    }
};
TokenService = __decorate([
    __param(0, common_1.Inject(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [Object, config_1.ConfigService,
        jwt_1.JwtService])
], TokenService);
exports.TokenService = TokenService;
//# sourceMappingURL=token.service.js.map