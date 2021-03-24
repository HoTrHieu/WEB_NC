"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_module_1 = require("../category/category.module");
const content_module_1 = require("../content/content.module");
const enrollment_module_1 = require("../enrollment/enrollment.module");
const es_helper_module_1 = require("../es-helper/es-helper.module");
const highlight_course_module_1 = require("../highlight-course/highlight-course.module");
const course_entity_1 = require("../shared/entities/course.entity");
const elasticsearch_module_1 = require("../shared/modules/elasticsearch.module");
const watch_list_module_1 = require("../watch-list/watch-list.module");
const course_es_service_1 = require("./course-es.service");
const course_controller_1 = require("./course.controller");
const course_service_1 = require("./course.service");
let CourseModule = class CourseModule {
};
CourseModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([course_entity_1.Course]),
            elasticsearch_module_1.esModule,
            es_helper_module_1.EsHelperModule,
            highlight_course_module_1.HighlightCourseModule,
            watch_list_module_1.WatchListModule,
            category_module_1.CategoryModule,
            enrollment_module_1.EnrollmentModule,
            content_module_1.ContentModule
        ],
        controllers: [course_controller_1.CourseController],
        providers: [course_service_1.CourseService, course_es_service_1.CourseEsService],
        exports: [course_service_1.CourseService, course_es_service_1.CourseEsService],
    })
], CourseModule);
exports.CourseModule = CourseModule;
//# sourceMappingURL=course.module.js.map