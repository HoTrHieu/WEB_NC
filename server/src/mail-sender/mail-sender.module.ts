import { Module } from '@nestjs/common';
import { OtpModule } from 'src/otp/otp.module';
import { MailSenderController } from './mail-sender.controller';
import { MailSenderService } from './mail-sender.service';

@Module({
  imports: [OtpModule],
  controllers: [MailSenderController],
  providers: [MailSenderService],
  exports: [MailSenderService],
})
export class MailSenderModule {}
