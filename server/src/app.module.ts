import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guard/jwt.guard';
import { RoleGuard } from './auth/guard/role.guard';
import { CategoryModule } from './category/category.module';
import { ContentModule } from './content/content.module';
import { CourseModule } from './course/course.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { ReviewModule } from './review/review.module';
import { rootConfiguration } from './shared/config/config';
import { mysqlModule } from './shared/modules/mysql.module';
import { StudyProcessModule } from './study-process/study-process.module';
import { UploaderModule } from './uploader/uploader.module';
import { UserModule } from './user/user.module';
import { WatchListModule } from './watch-list/watch-list.module';
import { mailerModule } from './shared/modules/mailer.module';
import { MailSenderModule } from './mail-sender/mail-sender.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [rootConfiguration],
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'webapp'),
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'assets'),
      serveRoot: '/assets',
    }),
    mailerModule,
    mysqlModule,
    AuthModule,
    CategoryModule,
    ContentModule,
    CourseModule,
    EnrollmentModule,
    ReviewModule,
    StudyProcessModule,
    UploaderModule,
    UserModule,
    WatchListModule,
    MailSenderModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AppModule {}
