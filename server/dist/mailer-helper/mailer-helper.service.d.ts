import { MailerService } from '@nestjs-modules/mailer';
export declare class MailerHelper {
    private mailerService;
    constructor(mailerService: MailerService);
    sendMail(to: string, subject: string, content: string): Promise<any>;
}
