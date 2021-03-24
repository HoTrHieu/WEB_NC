"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailerModule = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const ejs_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/ejs.adapter");
const config_1 = require("@nestjs/config");
exports.mailerModule = mailer_1.MailerModule.forRootAsync({
    useFactory: (config) => ({
        transport: {
            host: config.get('settings.mailer.host'),
            port: config.get('settings.mailer.port'),
            requireTLS: true,
            secure: false,
            auth: {
                user: config.get('settings.mailer.auth.user'),
                pass: config.get('settings.mailer.auth.pass')
            }
        },
        template: {
            dir: __dirname + '/templates',
            adapter: new ejs_adapter_1.EjsAdapter(),
            options: {
                strict: true,
            },
        },
    }),
    inject: [config_1.ConfigService]
});
//# sourceMappingURL=mailer.module.js.map