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
exports.OtpService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const otpGenerator = require("otp-generator");
let OtpService = class OtpService {
    constructor(cacheManager, config) {
        this.cacheManager = cacheManager;
        this.config = config;
        this.OTP_LENGTH = this.config.get('otp.length');
    }
    async generateOtp(sessionId) {
        const otp = otpGenerator.generate(this.OTP_LENGTH, {
            digits: true,
            alphabets: false,
            specialChars: false,
            upperCase: false,
        });
        await this.cacheManager.set(otp, sessionId);
        return otp;
    }
    async checkOtp(otp, sessionId) {
        const savedSessionId = await this.cacheManager.get(otp);
        const result = !!savedSessionId && savedSessionId === sessionId;
        if (result) {
            await this.cacheManager.del(otp);
        }
        return result;
    }
};
OtpService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [Object, config_1.ConfigService])
], OtpService);
exports.OtpService = OtpService;
//# sourceMappingURL=otp.service.js.map