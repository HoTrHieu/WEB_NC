import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { OtpService } from "src/otp/otp.service";
import { bultinMailTemplates } from "./constant/bultin-mail-template.dto";

@Injectable()
export class MailSenderService {

  constructor(
    private mailerService: MailerService,
    private otpService: OtpService
  ) {}

  async sendOtpMail(name: string, address: string) {
    const otp = await this.otpService.generateOtp(address);
    const template = bultinMailTemplates.OTP(name, otp);
    const result = await this.mailerService.sendMail({
      to: address,
      subject: template.subject,
      html: template.html
    });
    console.log(result);
    return result;
  }
}