import { BooleanResponse } from 'src/shared/dtos/boolean-response.dto';
import { SendOtpMailRequest } from './dto/send-otp-mail-request.dto';
import { MailSenderService } from './mail-sender.service';
export declare class MailSenderController {
    private mailSenderService;
    constructor(mailSenderService: MailSenderService);
    sendOtpMail(request: SendOtpMailRequest): Promise<BooleanResponse>;
}
