"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUser = void 0;
const user_role_1 = require("../../shared/enums/user-role");
class AuthUser {
    static of(id, role) {
        const authUser = new AuthUser();
        authUser.id = id;
        authUser.role = role;
        return authUser;
    }
}
exports.AuthUser = AuthUser;
//# sourceMappingURL=auth-user.dto.js.map