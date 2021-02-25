import { MailTemplate } from "../dto/mail-template.dto";

const otpMailHtml = (name: string, otp: string) =>
`
Hi <b>${name}</b>, <br/><br/>

This is the OTP to complete your registration: <b>${otp}</b>, <br/><br/>

Thank you for registering as our member, <br/>
Best regards, <br/><br/>

<b>Fademy.edu</b>
`;

export const bultinMailTemplates = {
  OTP: (name: string, otp: string) => MailTemplate.of(
    '[Fademy.edu] Register OTP',
    otpMailHtml(name, otp)
  )
}