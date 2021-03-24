import { ApiEndpoint } from "../../shared/constants/ApiEndpoint";
import { CrudService } from "../../shared/services/CrudService";

export class MailSenderService {
  static sendOtp(name: string, email: string) {
    return CrudService.post(ApiEndpoint.mailSender.sendOtpMail, {
      name, email
    });
  }
}