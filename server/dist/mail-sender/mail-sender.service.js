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
exports.MailSenderService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const otp_service_1 = require("../otp/otp.service");
const bultin_mail_template_dto_1 = require("./constant/bultin-mail-template.dto");
let MailSenderService = class MailSenderService {
    constructor(mailerService, otpService, config) {
        this.mailerService = mailerService;
        this.otpService = otpService;
        this.config = config;
        this.DEFAULT_FROM = this.config.get('settings.mailer.from');
    }
    async sendOtpMail(name, address) {
        const otp = await this.otpService.generateOtp(address);
        const template = bultin_mail_template_dto_1.bultinMailTemplates.OTP(name, otp);
        const result = await this.mailerService.sendMail({
            to: address,
            from: this.DEFAULT_FROM,
            subject: template.subject,
            html: template.html
        });
        return result;
    }
};
MailSenderService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [mailer_1.MailerService,
        otp_service_1.OtpService,
        config_1.ConfigService])
], MailSenderService);
exports.MailSenderService = MailSenderService;
//# sourceMappingURL=mail-sender.service.js.map