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
exports.UploaderController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const api_file_decorator_1 = require("../shared/decorators/api-file.decorator");
const role_decorator_1 = require("../shared/decorators/role.decorator");
const std_response_dto_1 = require("../shared/dtos/std-response.dto");
const file_type_1 = require("../shared/enums/file-type");
const std_response_code_1 = require("../shared/enums/std-response-code");
const user_role_1 = require("../shared/enums/user-role");
const uploader_service_1 = require("./uploader.service");
let UploaderController = class UploaderController {
    constructor(uploaderService) {
        this.uploaderService = uploaderService;
    }
    async upload(fileType, state, file) {
        const filePath = await this.uploaderService.upload(fileType, file);
        return std_response_dto_1.StdResponse.of(std_response_code_1.StdResponseCode.SUCCESS, {
            filePath,
            state
        });
    }
};
__decorate([
    role_decorator_1.Role(user_role_1.UserRole.TEACHER, user_role_1.UserRole.ADMIN),
    common_1.Post('/upload'),
    swagger_1.ApiResponse({
        type: std_response_dto_1.StdResponse,
    }),
    swagger_1.ApiConsumes('multipart/form-data'),
    api_file_decorator_1.ApiFile('file'),
    swagger_1.ApiBearerAuth(),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file')),
    __param(0, common_1.Headers('x-file-type')),
    __param(1, common_1.Headers('x-upload-state')),
    __param(2, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], UploaderController.prototype, "upload", null);
UploaderController = __decorate([
    swagger_1.ApiTags('Uploader'),
    common_1.Controller('/uploader'),
    __metadata("design:paramtypes", [uploader_service_1.UploaderService])
], UploaderController);
exports.UploaderController = UploaderController;
//# sourceMappingURL=uploader.controller.js.map