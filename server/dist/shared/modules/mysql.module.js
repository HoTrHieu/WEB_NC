"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mysqlModule = void 0;
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const category_total_enrollment_entity_1 = require("../entities/category-total-enrollment.entity");
const category_entity_1 = require("../entities/category.entity");
const content_entity_1 = require("../entities/content.entity");
const course_entity_1 = require("../entities/course.entity");
const enrollment_entity_1 = require("../entities/enrollment.entity");
const highlight_course_entity_1 = require("../entities/highlight-course.entity");
const review_entity_1 = require("../entities/review.entity");
const study_process_entity_1 = require("../entities/study-process.entity");
const user_entity_1 = require("../entities/user.entity");
const watch_list_entity_1 = require("../entities/watch-list.entity");
exports.mysqlModule = typeorm_1.TypeOrmModule.forRootAsync({
    useFactory: (config) => ({
        type: 'mysql',
        host: config.get('settings.mysql.host'),
        port: config.get('settings.mysql.port'),
        username: config.get('settings.mysql.username'),
        password: config.get('settings.mysql.password'),
        database: config.get('settings.mysql.dbname'),
        entities: [
            category_entity_1.Category,
            content_entity_1.Content,
            course_entity_1.Course,
            enrollment_entity_1.Enrollment,
            review_entity_1.Review,
            study_process_entity_1.StudyProcess,
            user_entity_1.User,
            watch_list_entity_1.WatchList,
            highlight_course_entity_1.HighlightCourse,
            category_total_enrollment_entity_1.CategoryTotalEnrollment,
        ],
        synchronize: config.get('settings.mysql.sync'),
        insecureAuth: true,
    }),
    inject: [config_1.ConfigService],
});
//# sourceMappingURL=mysql.module.js.map