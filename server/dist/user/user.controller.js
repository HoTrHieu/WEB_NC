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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const authed_request_1 = require("../auth/dto/authed-request");
const public_decorator_1 = require("../shared/decorators/public.decorator");
const role_decorator_1 = require("../shared/decorators/role.decorator");
const boolean_response_dto_1 = require("../shared/dtos/boolean-response.dto");
const paging_response_dto_1 = require("../shared/dtos/paging-response.dto");
const search_request_dto_1 = require("../shared/dtos/search-request.dto");
const std_response_dto_1 = require("../shared/dtos/std-response.dto");
const update_status_request_dto_1 = require("../shared/dtos/update-status-request.dto");
const std_response_code_1 = require("../shared/enums/std-response-code");
const user_role_1 = require("../shared/enums/user-role");
const add_user_with_role_request_dto_1 = require("./dto/add-user-with-role-request.dto");
const check_email_request_dto_1 = require("./dto/check-email-request.dto");
const check_response_dto_1 = require("./dto/check-response.dto");
const check_username_request_dto_1 = require("./dto/check-username-request.dto");
const search_user_request_dto_1 = require("./dto/search-user-request.dto");
const update_email_request_dto_1 = require("./dto/update-email-request.dto");
const update_teacher_profile_request_dto_1 = require("./dto/update-teacher-profile-request.dto");
const update_user_first_last_name_request_dto_1 = require("./dto/update-user-first-last-name-request.dto");
const update_user_role_request_dto_1 = require("./dto/update-user-role-request.dto");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    searchUser(request) {
        return this.userService.searchUser(request);
    }
    async checkEmail(request) {
        const exists = await this.userService.findOneByEmail(request.email);
        return check_response_dto_1.CheckResponse.of(!!exists);
    }
    async checkUsername(request) {
        const exists = await this.userService.findOneByUsername(request.username);
        return check_response_dto_1.CheckResponse.of(!!exists);
    }
    async addUser(request) {
        const newUser = await this.userService.addUser(request);
        return std_response_dto_1.StdResponse.of(std_response_code_1.StdResponseCode.SUCCESS, newUser.id);
    }
    async updateEmail(req, body) {
        const isSuccess = await this.userService.updateEmail(req.user.id, body.email, body.otp);
        return boolean_response_dto_1.BooleanResponse.of(isSuccess);
    }
    async updateFirstLastName(req, body) {
        const isSuccess = await this.userService.updateFirstLastName(req.user.id, body.firstName, body.lastName);
        return boolean_response_dto_1.BooleanResponse.of(isSuccess);
    }
    async updateTeacherProfile(req, body) {
        const isSuccess = await this.userService.updateTeacherProfile(req.user.id, body.bio, body.introduction);
        return boolean_response_dto_1.BooleanResponse.of(isSuccess);
    }
    async updateRole(id, request) {
        const isSuccess = await this.userService.updateRole(id, request.role);
        return boolean_response_dto_1.BooleanResponse.of(isSuccess);
    }
    async updateStatus(id, request) {
        const isSuccess = await this.userService.updateStatus(id, request.status);
        return boolean_response_dto_1.BooleanResponse.of(isSuccess);
    }
};
__decorate([
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    role_decorator_1.Role(user_role_1.UserRole.ADMIN),
    common_1.Get('/search'),
    swagger_1.ApiResponse({
        type: paging_response_dto_1.PagingResponse,
    }),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [search_user_request_dto_1.SearchUserRequest]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "searchUser", null);
__decorate([
    public_decorator_1.Public(),
    common_1.Get('/check-email'),
    swagger_1.ApiResponse({
        type: check_response_dto_1.CheckResponse
    }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [check_email_request_dto_1.CheckEmailRequest]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "checkEmail", null);
__decorate([
    public_decorator_1.Public(),
    common_1.Get('/check-username'),
    swagger_1.ApiResponse({
        type: check_response_dto_1.CheckResponse
    }),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [check_username_request_dto_1.CheckUsernameRequest]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "checkUsername", null);
__decorate([
    role_decorator_1.Role(user_role_1.UserRole.ADMIN),
    common_1.Post(),
    swagger_1.ApiResponse({
        type: std_response_dto_1.StdResponse,
    }),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_user_with_role_request_dto_1.AddUserWithRoleRequest]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addUser", null);
__decorate([
    common_1.Put('/update-email'),
    swagger_1.ApiResponse({
        type: boolean_response_dto_1.BooleanResponse,
    }),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Request()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authed_request_1.AuthedRequest,
        update_email_request_dto_1.UpdateEmailRequest]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateEmail", null);
__decorate([
    common_1.Put('/update-first-last-name'),
    swagger_1.ApiResponse({
        type: boolean_response_dto_1.BooleanResponse,
    }),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Request()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authed_request_1.AuthedRequest,
        update_user_first_last_name_request_dto_1.UpdateUserFirstLastNameRequest]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateFirstLastName", null);
__decorate([
    common_1.Put('/update-teacher-profile'),
    swagger_1.ApiResponse({
        type: boolean_response_dto_1.BooleanResponse,
    }),
    swagger_1.ApiBearerAuth(),
    role_decorator_1.Role(user_role_1.UserRole.TEACHER),
    __param(0, common_1.Request()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authed_request_1.AuthedRequest,
        update_teacher_profile_request_dto_1.UpdateTeacherProfileRequest]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateTeacherProfile", null);
__decorate([
    role_decorator_1.Role(user_role_1.UserRole.ADMIN),
    common_1.Put('/update-role/:id'),
    swagger_1.ApiResponse({
        type: boolean_response_dto_1.BooleanResponse,
    }),
    swagger_1.ApiBearerAuth(),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_user_role_request_dto_1.UpdateUserRoleRequest]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateRole", null);
__decorate([
    role_decorator_1.Role(user_role_1.UserRole.ADMIN),
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
], UserController.prototype, "updateStatus", null);
UserController = __decorate([
    swagger_1.ApiTags('User'),
    common_1.Controller('/user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map