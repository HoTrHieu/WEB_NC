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
exports.ContentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const authed_request_1 = require("../auth/dto/authed-request");
const role_decorator_1 = require("../shared/decorators/role.decorator");
const boolean_response_dto_1 = require("../shared/dtos/boolean-response.dto");
const std_response_dto_1 = require("../shared/dtos/std-response.dto");
const update_status_request_dto_1 = require("../shared/dtos/update-status-request.dto");
const content_entity_1 = require("../shared/entities/content.entity");
const std_response_code_1 = require("../shared/enums/std-response-code");
const user_role_1 = require("../shared/enums/user-role");
const content_service_1 = require("./content.service");
let ContentController = class ContentController {
    constructor(contentService) {
        this.contentService = contentService;
    }
    async add(courseId, content, req) {
        const newContent = await this.contentService.add(courseId, content);
        return std_response_dto_1.StdResponse.of(std_response_code_1.StdResponseCode.SUCCESS, newContent.id);
    }
    async update(contentId, content, req) {
        const isSuccess = await this.contentService.update(contentId, content);
        return boolean_response_dto_1.BooleanResponse.of(isSuccess);
    }
    async updateStatus(id, request) {
        const isSuccess = await this.contentService.updateStatus(id, request.status);
        return boolean_response_dto_1.BooleanResponse.of(isSuccess);
    }
};
__decorate([
    role_decorator_1.Role(user_role_1.UserRole.TEACHER),
    common_1.Post('/:courseId'),
    swagger_1.ApiResponse({
        type: std_response_dto_1.StdResponse,
    }),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Param('courseId')),
    __param(1, common_1.Body()),
    __param(2, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, content_entity_1.Content,
        authed_request_1.AuthedRequest]),
    __metadata("design:returntype", Promise)
], ContentController.prototype, "add", null);
__decorate([
    role_decorator_1.Role(user_role_1.UserRole.TEACHER),
    common_1.Put('/:contentId'),
    swagger_1.ApiResponse({
        type: boolean_response_dto_1.BooleanResponse,
    }),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Param('contentId')),
    __param(1, common_1.Body()),
    __param(2, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, content_entity_1.Content,
        authed_request_1.AuthedRequest]),
    __metadata("design:returntype", Promise)
], ContentController.prototype, "update", null);
__decorate([
    role_decorator_1.Role(user_role_1.UserRole.TEACHER),
    common_1.Put('/update-status/:id'),
    swagger_1.ApiResponse({
        type: boolean_response_dto_1.BooleanResponse,
    }),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_status_request_dto_1.UpdateStatusRequest]),
    __metadata("design:returntype", Promise)
], ContentController.prototype, "updateStatus", null);
ContentController = __decorate([
    swagger_1.ApiTags('Content'),
    common_1.Controller('/content'),
    __metadata("design:paramtypes", [content_service_1.ContentService])
], ContentController);
exports.ContentController = ContentController;
//# sourceMappingURL=content.controller.js.map