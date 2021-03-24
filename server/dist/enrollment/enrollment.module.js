"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrollmentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_total_enrollment_module_1 = require("../category-total-enrollment/category-total-enrollment.module");
const course_module_1 = require("../course/course.module");
const enrollment_entity_1 = require("../shared/entities/enrollment.entity");
const enrollment_controller_1 = require("./enrollment.controller");
const enrollment_service_1 = require("./enrollment.service");
let EnrollmentModule = class EnrollmentModule {
};
EnrollmentModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([enrollment_entity_1.Enrollment]),
            common_1.forwardRef(() => course_module_1.CourseModule),
            category_total_enrollment_module_1.CategoryTotalEnrollmentModule,
        ],
        controllers: [enrollment_controller_1.EnrollmentController],
        providers: [enrollment_service_1.EnrollmentService],
        exports: [enrollment_service_1.EnrollmentService],
    })
], EnrollmentModule);
exports.EnrollmentModule = EnrollmentModule;
//# sourceMappingURL=enrollment.module.js.map