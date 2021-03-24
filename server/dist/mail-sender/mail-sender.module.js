"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailSenderModule = void 0;
const common_1 = require("@nestjs/common");
const otp_module_1 = require("../otp/otp.module");
const mail_sender_controller_1 = require("./mail-sender.controller");
const mail_sender_service_1 = require("./mail-sender.service");
let MailSenderModule = class MailSenderModule {
};
MailSenderModule = __decorate([
    common_1.Module({
        imports: [otp_module_1.OtpModule],
        controllers: [mail_sender_controller_1.MailSenderController],
        providers: [mail_sender_service_1.MailSenderService],
        exports: [mail_sender_service_1.MailSenderService],
    })
], MailSenderModule);
exports.MailSenderModule = MailSenderModule;
//# sourceMappingURL=mail-sender.module.js.map