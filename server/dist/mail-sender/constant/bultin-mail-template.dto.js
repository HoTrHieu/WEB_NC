"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bultinMailTemplates = void 0;
const mail_template_dto_1 = require("../dto/mail-template.dto");
const otpMailHtml = (name, otp) => `
Hi <b>${name}</b>, <br/><br/>

This is the OTP to complete your registration: <b>${otp}</b>, <br/><br/>

Thank you for registering as our member, <br/>
Best regards, <br/><br/>

<b>Fademy</b>
`;
exports.bultinMailTemplates = {
    OTP: (name, otp) => mail_template_dto_1.MailTemplate.of('[Fademy.edu] Register OTP', otpMailHtml(name, otp))
};
//# sourceMappingURL=bultin-mail-template.dto.js.map