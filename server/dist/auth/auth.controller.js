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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const public_decorator_1 = require("../shared/decorators/public.decorator");
const boolean_response_dto_1 = require("../shared/dtos/boolean-response.dto");
const std_response_dto_1 = require("../shared/dtos/std-response.dto");
const user_entity_1 = require("../shared/entities/user.entity");
const std_response_code_1 = require("../shared/enums/std-response-code");
const auth_service_1 = require("./auth.service");
const authed_request_1 = require("./dto/authed-request");
const change_password_request_dto_1 = require("./dto/change-password-request.dto");
const login_request_dto_1 = require("./dto/login-request.dto");
const login_response_dto_1 = require("./dto/login-response.dto");
const register_request_dto_1 = require("./dto/register-request.dto");
const google_guard_1 = require("./guard/google.guard");
const local_guard_1 = require("./guard/local.guard");
const token_service_1 = require("./token/token.service");
let AuthController = class AuthController {
    constructor(authService, tokenService, configService) {
        this.authService = authService;
        this.tokenService = tokenService;
        this.configService = configService;
    }
    async register(request) {
        const newUser = await this.authService.register(request);
        return std_response_dto_1.StdResponse.of(std_response_code_1.StdResponseCode.SUCCESS, newUser.id);
    }
    login(req) {
        return this.authService.login(req.user);
    }
    async googleLogin(req) { }
    async googleRedirect(req, res) {
        const loginResult = await this.authService.login(req.user);
        res.redirect(this.configService.get('settings.google.feRedirectURL') +
            `?accessToken=${loginResult.accessToken}&refreshToken=${loginResult.refreshToken}`);
    }
    refreshAccessToken(refreshToken) {
        return this.tokenService.getAccessTokenFromRefreshToken(refreshToken);
    }
    logout() {
    }
    getProfile(req) {
        return this.authService.getProfile(req.user);
    }
    async changePassword(body, req) {
        const isSuccess = await this.authService.changePassword(req.user.id, body.oldPassword, body.newPassword);
        return boolean_response_dto_1.BooleanResponse.of(isSuccess);
    }
};
__decorate([
    public_decorator_1.Public(),
    common_1.Post('/register'),
    swagger_1.ApiResponse({
        type: std_response_dto_1.StdResponse,
    }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_request_dto_1.RegisterRequest]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    common_1.UseGuards(local_guard_1.LocalAuthGuard),
    common_1.Post('/login'),
    swagger_1.ApiBody({
        type: login_request_dto_1.LoginRequest,
    }),
    swagger_1.ApiResponse({
        type: login_response_dto_1.LoginResponse,
    }),
    public_decorator_1.Public(),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authed_request_1.AuthedRequest]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Get('/login/google'),
    common_1.UseGuards(google_guard_1.GoogleAuthGuard),
    public_decorator_1.Public(),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleLogin", null);
__decorate([
    common_1.Get('/redirect/google'),
    common_1.UseGuards(google_guard_1.GoogleAuthGuard),
    public_decorator_1.Public(),
    __param(0, common_1.Request()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleRedirect", null);
__decorate([
    common_1.Post('/refresh-access-token'),
    swagger_1.ApiResponse({
        type: login_response_dto_1.LoginResponse,
    }),
    public_decorator_1.Public(),
    __param(0, common_1.Query('refreshToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "refreshAccessToken", null);
__decorate([
    common_1.Post('/logout'),
    swagger_1.ApiExcludeEndpoint(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logout", null);
__decorate([
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    common_1.Get('/profile'),
    swagger_1.ApiResponse({
        type: user_entity_1.User,
    }),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authed_request_1.AuthedRequest]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getProfile", null);
__decorate([
    common_1.Put('/change-password'),
    swagger_1.ApiResponse({
        type: boolean_response_dto_1.BooleanResponse,
    }),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Body()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [change_password_request_dto_1.ChangePasswordRequest, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "changePassword", null);
AuthController = __decorate([
    swagger_1.ApiTags('Auth'),
    common_1.Controller('/auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        token_service_1.TokenService,
        config_1.ConfigService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map