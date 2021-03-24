import { AuthedRequest } from 'src/auth/dto/authed-request';
import { BooleanResponse } from 'src/shared/dtos/boolean-response.dto';
import { PagingResponse } from 'src/shared/dtos/paging-response.dto';
import { StdResponse } from 'src/shared/dtos/std-response.dto';
import { UpdateStatusRequest } from 'src/shared/dtos/update-status-request.dto';
import { AddUserWithRoleRequest } from './dto/add-user-with-role-request.dto';
import { CheckEmailRequest } from './dto/check-email-request.dto';
import { CheckResponse } from './dto/check-response.dto';
import { CheckUsernameRequest } from './dto/check-username-request.dto';
import { SearchUserRequest } from './dto/search-user-request.dto';
import { UpdateEmailRequest } from './dto/update-email-request.dto';
import { UpdateTeacherProfileRequest } from './dto/update-teacher-profile-request.dto';
import { UpdateUserFirstLastNameRequest } from './dto/update-user-first-last-name-request.dto';
import { UpdateUserRoleRequest } from './dto/update-user-role-request.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    searchUser(request: SearchUserRequest): Promise<PagingResponse<import("../shared/entities/user.entity").User>>;
    checkEmail(request: CheckEmailRequest): Promise<CheckResponse>;
    checkUsername(request: CheckUsernameRequest): Promise<CheckResponse>;
    addUser(request: AddUserWithRoleRequest): Promise<StdResponse<any>>;
    updateEmail(req: AuthedRequest, body: UpdateEmailRequest): Promise<BooleanResponse>;
    updateFirstLastName(req: AuthedRequest, body: UpdateUserFirstLastNameRequest): Promise<BooleanResponse>;
    updateTeacherProfile(req: AuthedRequest, body: UpdateTeacherProfileRequest): Promise<BooleanResponse>;
    updateRole(id: number, request: UpdateUserRoleRequest): Promise<BooleanResponse>;
    updateStatus(id: number, request: UpdateStatusRequest): Promise<BooleanResponse>;
}
