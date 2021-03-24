"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailTemplate = void 0;
class MailTemplate {
    static of(subject, html) {
        const template = new MailTemplate();
        template.subject = subject;
        template.html = html;
        return template;
    }
}
exports.MailTemplate = MailTemplate;
//# sourceMappingURL=mail-template.dto.js.map