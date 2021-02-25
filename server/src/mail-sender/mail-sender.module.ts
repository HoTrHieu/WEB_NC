import { Module } from '@nestjs/common';
import { OtpModule } from 'src/otp/otp.module';
import { MailSenderService } from './mail-sender.service';

@Module({
  imports: [OtpModule],
  providers: [MailSenderService],
  exports: [MailSenderService],
})
export class MailSenderModule {}
