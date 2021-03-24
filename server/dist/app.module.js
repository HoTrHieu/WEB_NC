"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const auth_module_1 = require("./auth/auth.module");
const jwt_guard_1 = require("./auth/guard/jwt.guard");
const role_guard_1 = require("./auth/guard/role.guard");
const category_module_1 = require("./category/category.module");
const content_module_1 = require("./content/content.module");
const course_module_1 = require("./course/course.module");
const enrollment_module_1 = require("./enrollment/enrollment.module");
const review_module_1 = require("./review/review.module");
const config_2 = require("./shared/config/config");
const mysql_module_1 = require("./shared/modules/mysql.module");
const study_process_module_1 = require("./study-process/study-process.module");
const uploader_module_1 = require("./uploader/uploader.module");
const user_module_1 = require("./user/user.module");
const watch_list_module_1 = require("./watch-list/watch-list.module");
const mailer_module_1 = require("./shared/modules/mailer.module");
const mail_sender_module_1 = require("./mail-sender/mail-sender.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [config_2.rootConfiguration],
                isGlobal: true,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '..', 'webapp'),
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '..', 'assets'),
                serveRoot: '/assets',
            }),
            mailer_module_1.mailerModule,
            mysql_module_1.mysqlModule,
            auth_module_1.AuthModule,
            category_module_1.CategoryModule,
            content_module_1.ContentModule,
            course_module_1.CourseModule,
            enrollment_module_1.EnrollmentModule,
            review_module_1.ReviewModule,
            study_process_module_1.StudyProcessModule,
            uploader_module_1.UploaderModule,
            user_module_1.UserModule,
            watch_list_module_1.WatchListModule,
            mail_sender_module_1.MailSenderModule
        ],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_guard_1.JwtAuthGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: role_guard_1.RoleGuard,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map