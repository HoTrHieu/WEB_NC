export declare class MailTemplate {
    subject: string;
    html: string;
    static of(subject: string, html: string): MailTemplate;
}
