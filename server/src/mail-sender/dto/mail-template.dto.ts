export class MailTemplate {
  subject: string;
  html: string;

  static of(subject: string, html: string) {
    const template = new MailTemplate();
    template.subject = subject;
    template.html = html;
    return template;
  }
}