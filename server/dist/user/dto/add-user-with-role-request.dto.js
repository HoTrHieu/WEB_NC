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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserWithRoleRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const user_role_1 = require("../../shared/enums/user-role");
const class_util_1 = require("../../shared/utils/class.util");
const add_user_request_dto_1 = require("./add-user-request.dto");
class AddUserWithRoleRequest extends add_user_request_dto_1.AddUserRequest {
    static of(addUserRequest) {
        return class_util_1.ClassUtils.copyFields(addUserRequest, new AddUserWithRoleRequest());
    }
    static ofGoogleProfile(profile) {
        const req = new AddUserWithRoleRequest();
        req.username = null;
        req.password = null;
        req.firstName = profile.name.familyName + (!!profile.name.middleName ? ` ${profile.name.middleName}` : '');
        req.lastName = profile.name.givenName;
        req.email = profile.emails[0].value;
        req.role = user_role_1.UserRole.NORMAL;
        return req;
    }
}
__decorate([
    class_validator_1.IsEnum(user_role_1.UserRole),
    swagger_1.ApiProperty({ enum: user_role_1.UserRole }),
    __metadata("design:type", Number)
], AddUserWithRoleRequest.prototype, "role", void 0);
exports.AddUserWithRoleRequest = AddUserWithRoleRequest;
//# sourceMappingURL=add-user-with-role-request.dto.js.map