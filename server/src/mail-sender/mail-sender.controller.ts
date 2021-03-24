import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/shared/decorators/public.decorator';
import { BooleanResponse } from 'src/shared/dtos/boolean-response.dto';
import { SendOtpMailRequest } from './dto/send-otp-mail-request.dto';
import { MailSenderService } from './mail-sender.service';

@ApiTags('Mail sender')
@Controller('/mail-sender')
export class MailSenderController {
  constructor(private mailSenderService: MailSenderService) {}

  @Public()
  @Post('/send-otp-mail')
  @ApiResponse({
    type: BooleanResponse,
  })
  async sendOtpMail(@Body() request: SendOtpMailRequest) {
    await this.mailSenderService.sendOtpMail(request.name, request.email);
    return BooleanResponse.of(true);
  }
}
