import { MailerService } from "@nestjs-modules/mailer";
import { ConfigService } from "@nestjs/config";
import { OtpService } from "src/otp/otp.service";
export declare class MailSenderService {
    private mailerService;
    private otpService;
    private config;
    private DEFAULT_FROM;
    constructor(mailerService: MailerService, otpService: OtpService, config: ConfigService);
    sendOtpMail(name: string, address: string): Promise<any>;
}
