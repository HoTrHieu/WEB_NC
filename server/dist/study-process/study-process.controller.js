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
exports.StudyProcessController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const authed_request_1 = require("../auth/dto/authed-request");
const role_decorator_1 = require("../shared/decorators/role.decorator");
const boolean_response_dto_1 = require("../shared/dtos/boolean-response.dto");
const study_process_entity_1 = require("../shared/entities/study-process.entity");
const user_role_1 = require("../shared/enums/user-role");
const update_study_process_request_dto_1 = require("./dto/update-study-process-request.dto");
const study_process_service_1 = require("./study-process.service");
let StudyProcessController = class StudyProcessController {
    constructor(studyProcessService) {
        this.studyProcessService = studyProcessService;
    }
    async findByCourseId(courseId, req) {
        return this.studyProcessService.findByCourseId(courseId, req.user.id);
    }
    async findOne(courseId, contentId, req) {
        return this.studyProcessService.findOne(courseId, req.user.id, contentId);
    }
    async update(courseId, request, req) {
        await this.studyProcessService.update(courseId, req.user.id, request);
        return boolean_response_dto_1.BooleanResponse.of(true);
    }
};
__decorate([
    common_1.Get('/find-by-course-id/:courseId'),
    swagger_1.ApiResponse({
        type: study_process_entity_1.StudyProcess,
        isArray: true,
    }),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Param('courseId')),
    __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, authed_request_1.AuthedRequest]),
    __metadata("design:returntype", Promise)
], StudyProcessController.prototype, "findByCourseId", null);
__decorate([
    common_1.Get('/find-one/:courseId'),
    swagger_1.ApiResponse({
        type: study_process_entity_1.StudyProcess
    }),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Param('courseId')),
    __param(1, common_1.Query('contentId')),
    __param(2, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, authed_request_1.AuthedRequest]),
    __metadata("design:returntype", Promise)
], StudyProcessController.prototype, "findOne", null);
__decorate([
    common_1.Put('/:courseId'),
    swagger_1.ApiResponse({
        type: boolean_response_dto_1.BooleanResponse,
    }),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Param('courseId')),
    __param(1, common_1.Body()),
    __param(2, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_study_process_request_dto_1.UpdateStudyProcessRequest,
        authed_request_1.AuthedRequest]),
    __metadata("design:returntype", Promise)
], StudyProcessController.prototype, "update", null);
StudyProcessController = __decorate([
    swagger_1.ApiTags('Study Process'),
    common_1.Controller('/study-process'),
    __metadata("design:paramtypes", [study_process_service_1.StudyProcessService])
], StudyProcessController);
exports.StudyProcessController = StudyProcessController;
//# sourceMappingURL=study-process.controller.js.map