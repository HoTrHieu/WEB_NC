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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const otp_service_1 = require("../otp/otp.service");
const user_role_1 = require("../shared/enums/user-role");
const add_user_with_role_request_dto_1 = require("../user/dto/add-user-with-role-request.dto");
const user_service_1 = require("../user/user.service");
const login_response_dto_1 = require("./dto/login-response.dto");
const token_service_1 = require("./token/token.service");
let AuthService = class AuthService {
    constructor(userService, tokenService, otpService) {
        this.userService = userService;
        this.tokenService = tokenService;
        this.otpService = otpService;
    }
    async validateLogin(username, password) {
        const user = await this.userService.findOneByUsername(username);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        const isValidPassword = await this.userService.comparePassword(password, user.passwordHash);
        if (!isValidPassword) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
    async validateGoogleLogin(profile) {
        const email = profile.emails[0];
        let user = await this.userService.findOneByEmail(email.value);
        if (!user) {
            user = await this.userService.addUser(add_user_with_role_request_dto_1.AddUserWithRoleRequest.ofGoogleProfile(profile), false);
        }
        return user;
    }
    async login(user) {
        const token = await this.tokenService.createTokens(user.id, user.role);
        return login_response_dto_1.LoginResponse.of(token.accessToken, token.refreshToken);
    }
    getProfile(authUser) {
        return this.userService.findOneById(authUser.id);
    }
    async changePassword(id, oldPassword, newPassword) {
        const user = await this.userService.findOneById(id);
        if (!user) {
            return false;
        }
        const isValidPassword = await this.userService.comparePassword(oldPassword, user.passwordHash);
        if (!isValidPassword) {
            return false;
        }
        return this.userService.updatePassword(id, newPassword);
    }
    async register(request) {
        const validOtp = await this.otpService.checkOtp(request.otp, request.email);
        if (!validOtp) {
            throw new common_1.BadRequestException("OTP is invalid");
        }
        delete request.otp;
        const addUserRequest = add_user_with_role_request_dto_1.AddUserWithRoleRequest.of(request);
        addUserRequest.role = user_role_1.UserRole.NORMAL;
        return this.userService.addUser(addUserRequest);
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        token_service_1.TokenService,
        otp_service_1.OtpService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map