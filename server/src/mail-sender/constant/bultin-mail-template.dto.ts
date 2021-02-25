import { MailTemplate } from "../dto/mail-template.dto";

const otpMailHtml = (name: string, otp: string) =>
`
Hi <b>${name}</b>,

This is the OTP to complete your registration: <b>${otp}</b>,

Thank you for registering as our member,
Best regards,

<b>Fademy.edu</b>
`;

export const bultinMailTemplates = {
  OTP: (name: string, otp: string) => MailTemplate.of(
    '[Fademy.edu] Register OTP',
    otpMailHtml(name, otp)
  )
}