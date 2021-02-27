import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { OtpService } from "src/otp/otp.service";
import { bultinMailTemplates } from "./constant/bultin-mail-template.dto";

@Injectable()
export class MailSenderService {

  private DEFAULT_FROM: string;

  constructor(
    private mailerService: MailerService,
    private otpService: OtpService,
    private config: ConfigService
  ) {
    this.DEFAULT_FROM = this.config.get('settings.mailer.from');
  }

  async sendOtpMail(name: string, address: string) {
    const otp = await this.otpService.generateOtp(address);
    const template = bultinMailTemplates.OTP(name, otp);
    const result = await this.mailerService.sendMail({
      to: address,
      from: this.DEFAULT_FROM,
      subject: template.subject,
      html: template.html
    });
    return result;
  }
}