import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailerHelper {

  constructor(private mailerService: MailerService) {}

  sendMail(to: string, subject: string, content: string) {
    return this.mailerService.sendMail({
      to, subject, html: content
    });
  }
}
