import { MailerModule } from "@nestjs-modules/mailer";
import { EjsAdapter } from "@nestjs-modules/mailer/dist/adapters/ejs.adapter";
import { ConfigService } from "@nestjs/config";

export const mailerModule = MailerModule.forRootAsync({
  useFactory: (config: ConfigService) => ({
    transport: {
      host: config.get('settings.mailer.host'),
      port: config.get('settings.mailer.port'),
      ignoreTLS: true,
      secure: false,
      auth: {
        user: config.get('settings.mailer.auth.user'),
        pass: config.get('settings.mailer.auth.pass')
      }
    },
    defaults: {
      from: 'Fademy <no-reply@fademy.com>',
    },
    template: {
      dir: __dirname + '/templates',
      adapter: new EjsAdapter(),
      options: {
        strict: true,
      },
    },
  }),
  imports: [ConfigService]
})