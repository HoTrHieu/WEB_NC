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
exports.MailSenderController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const public_decorator_1 = require("../shared/decorators/public.decorator");
const boolean_response_dto_1 = require("../shared/dtos/boolean-response.dto");
const send_otp_mail_request_dto_1 = require("./dto/send-otp-mail-request.dto");
const mail_sender_service_1 = require("./mail-sender.service");
let MailSenderController = class MailSenderController {
    constructor(mailSenderService) {
        this.mailSenderService = mailSenderService;
    }
    async sendOtpMail(request) {
        await this.mailSenderService.sendOtpMail(request.name, request.email);
        return boolean_response_dto_1.BooleanResponse.of(true);
    }
};
__decorate([
    public_decorator_1.Public(),
    common_1.Post('/send-otp-mail'),
    swagger_1.ApiResponse({
        type: boolean_response_dto_1.BooleanResponse,
    }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [send_otp_mail_request_dto_1.SendOtpMailRequest]),
    __metadata("design:returntype", Promise)
], MailSenderController.prototype, "sendOtpMail", null);
MailSenderController = __decorate([
    swagger_1.ApiTags('Mail sender'),
    common_1.Controller('/mail-sender'),
    __metadata("design:paramtypes", [mail_sender_service_1.MailSenderService])
], MailSenderController);
exports.MailSenderController = MailSenderController;
//# sourceMappingURL=mail-sender.controller.js.map