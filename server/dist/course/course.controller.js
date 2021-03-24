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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const authed_request_1 = require("../auth/dto/authed-request");
const public_decorator_1 = require("../shared/decorators/public.decorator");
const role_decorator_1 = require("../shared/decorators/role.decorator");
const boolean_response_dto_1 = require("../shared/dtos/boolean-response.dto");
const paging_response_dto_1 = require("../shared/dtos/paging-response.dto");
const std_response_dto_1 = require("../shared/dtos/std-response.dto");
const update_status_request_dto_1 = require("../shared/dtos/update-status-request.dto");
const course_entity_1 = require("../shared/entities/course.entity");
const std_response_code_1 = require("../shared/enums/std-response-code");
const user_role_1 = require("../shared/enums/user-role");
const course_es_service_1 = require("./course-es.service");
const course_service_1 = require("./course.service");
const course_search_request_dto_1 = require("./dto/course-search-request.dto");
const course_top_type_1 = require("./enums/course-top-type");
let CourseController = class CourseController {
    constructor(courseService, courseEsService) {
        this.courseService = courseService;
        this.courseEsService = courseEsService;
    }
    search(request, req) {
        return this.courseService.search(request, req.user);
    }
    topOfWeeks(req) {
        return this.courseService.topOfWeeks(req.user);
    }
    top(type, req) {
        return this.courseService.top(type, 10, req.user);
    }
    getDetail(courseId, req) {
        return this.courseService.getDetail(courseId, req.user);
    }
    async add(course, req) {
        const newCourse = await this.courseService.add(req.user.id, course);
        return std_response_dto_1.StdResponse.of(std_response_code_1.StdResponseCode.SUCCESS, newCourse.id);
    }
    async update(courseId, course, req) {
        const isSuccess = await this.courseService.update(req.user.id, courseId, course);
        return boolean_response_dto_1.BooleanResponse.of(isSuccess);
    }
    async updateStatus(id, request, req) {
        const isSuccess = await this.courseService.updateStatus(req.user.id, id, request.status);
        return boolean_response_dto_1.BooleanResponse.of(isSuccess);
    }
    async increaseTotalView(courseId) {
        const isSuccess = await this.courseService.increaseTotalView(courseId);
        return boolean_response_dto_1.BooleanResponse.of(isSuccess);
    }
    async syncToEs() {
        const courses = await this.courseService.all();
        const isSuccess = await this.courseEsService.syncToEs(courses);
        return boolean_response_dto_1.BooleanResponse.of(isSuccess);
    }
};
__decorate([
    public_decorator_1.Public(),
    common_1.Get('/search'),
    swagger_1.ApiResponse({
        type: paging_response_dto_1.PagingResponse,
    }),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    __param(0, common_1.Query()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [course_search_request_dto_1.CourseSearchRequest, authed_request_1.AuthedRequest]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "search", null);
__decorate([
    public_decorator_1.Public(),
    common_1.Get('/top-of-weeks'),
    swagger_1.ApiResponse({
        type: course_entity_1.Course,
        isArray: true
    }),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authed_request_1.AuthedRequest]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "topOfWeeks", null);
__decorate([
    public_decorator_1.Public(),
    common_1.Get('/top/:type'),
    swagger_1.ApiResponse({
        type: course_entity_1.Course,
        isArray: true
    }),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    __param(0, common_1.Param('type')), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, authed_request_1.AuthedRequest]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "top", null);
__decorate([
    public_decorator_1.Public(),
    common_1.Get('/detail/:courseId'),
    swagger_1.ApiResponse({
        type: course_entity_1.Course,
    }),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    __param(0, common_1.Param('courseId')), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, authed_request_1.AuthedRequest]),
    __metadata("design:returntype", void 0)
], CourseController.prototype, "getDetail", null);
__decorate([
    role_decorator_1.Role(user_role_1.UserRole.TEACHER),
    common_1.Post('/'),
    swagger_1.ApiResponse({
        type: std_response_dto_1.StdResponse,
    }),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Body()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [course_entity_1.Course, authed_request_1.AuthedRequest]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "add", null);
__decorate([
    role_decorator_1.Role(user_role_1.UserRole.TEACHER),
    common_1.Put('/:courseId'),
    swagger_1.ApiResponse({
        type: boolean_response_dto_1.BooleanResponse,
    }),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Param('courseId')),
    __param(1, common_1.Body()),
    __param(2, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, course_entity_1.Course,
        authed_request_1.AuthedRequest]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "update", null);
__decorate([
    role_decorator_1.Role(user_role_1.UserRole.TEACHER),
    common_1.Put('/update-status/:id'),
    swagger_1.ApiResponse({
        type: boolean_response_dto_1.BooleanResponse,
    }),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __param(2, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_status_request_dto_1.UpdateStatusRequest,
        authed_request_1.AuthedRequest]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "updateStatus", null);
__decorate([
    common_1.Put('/increase-total-view/:courseId'),
    swagger_1.ApiResponse({
        type: boolean_response_dto_1.BooleanResponse,
    }),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "increaseTotalView", null);
__decorate([
    public_decorator_1.Public(),
    common_1.Post('/sync-to-es'),
    swagger_1.ApiResponse({
        type: boolean_response_dto_1.BooleanResponse,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "syncToEs", null);
CourseController = __decorate([
    swagger_1.ApiTags('Course'),
    common_1.Controller('/course'),
    __metadata("design:paramtypes", [course_service_1.CourseService,
        course_es_service_1.CourseEsService])
], CourseController);
exports.CourseController = CourseController;
//# sourceMappingURL=course.controller.js.map