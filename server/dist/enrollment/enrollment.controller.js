"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var EnrollmentController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrollmentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const authed_request_1 = require("../auth/dto/authed-request");
const category_total_enrollment_service_1 = require("../category-total-enrollment/category-total-enrollment.service");
const course_service_1 = require("../course/course.service");
const std_response_dto_1 = require("../shared/dtos/std-response.dto");
const enrollment_entity_1 = require("../shared/entities/enrollment.entity");
const std_response_code_1 = require("../shared/enums/std-response-code");
const enrollment_service_1 = require("./enrollment.service");
let EnrollmentController = EnrollmentController_1 = class EnrollmentController {
    constructor(enrollmentService, courseService, categoryTotalEnrollmentService) {
        this.enrollmentService = enrollmentService;
        this.courseService = courseService;
        this.categoryTotalEnrollmentService = categoryTotalEnrollmentService;
        this.logger = new common_1.Logger(EnrollmentController_1.name);
    }
    getDetail(courseId, req) {
        return this.enrollmentService.getDetail(courseId, req.user.id);
    }
    async enroll(courseId, req) {
        const savedEnrollment = await this.enrollmentService.enroll(courseId, req.user.id);
        if (!!savedEnrollment) {
            const totalEnrollment = await this.enrollmentService.findTotalEnrollment(courseId);
            let success = await this.courseService.updateTotalEnrollment(courseId, totalEnrollment);
            if (success) {
                const categoryId = await this.courseService.findCategoryId(courseId);
                await this.categoryTotalEnrollmentService.increase(categoryId);
            }
            else {
                this.logger.error(`Update total enrollment failed for course: ${courseId}`);
            }
        }
        return std_response_dto_1.StdResponse.of(std_response_code_1.StdResponseCode.SUCCESS, true);
    }
};
__decorate([
    common_1.Get('/:courseId'),
    swagger_1.ApiResponse({
        type: enrollment_entity_1.Enrollment,
    }),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Param('courseId')),
    __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, authed_request_1.AuthedRequest]),
    __metadata("design:returntype", void 0)
], EnrollmentController.prototype, "getDetail", null);
__decorate([
    common_1.Post('/enroll/:courseId'),
    swagger_1.ApiResponse({
        type: std_response_dto_1.StdResponse,
    }),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Param('courseId')),
    __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, authed_request_1.AuthedRequest]),
    __metadata("design:returntype", Promise)
], EnrollmentController.prototype, "enroll", null);
EnrollmentController = EnrollmentController_1 = __decorate([
    swagger_1.ApiTags('Enrollment'),
    common_1.Controller('/enrollment'),
    __metadata("design:paramtypes", [enrollment_service_1.EnrollmentService,
        course_service_1.CourseService,
        category_total_enrollment_service_1.CategoryTotalEnrollmentService])
], EnrollmentController);
exports.EnrollmentController = EnrollmentController;
//# sourceMappingURL=enrollment.controller.js.map