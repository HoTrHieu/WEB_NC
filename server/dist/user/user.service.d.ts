import { OtpService } from 'src/otp/otp.service';
import { User } from 'src/shared/entities/user.entity';
import { EntityStatus } from 'src/shared/enums/entity-status';
import { UserRole } from 'src/shared/enums/user-role';
import { Repository } from 'typeorm';
import { AddUserWithRoleRequest } from './dto/add-user-with-role-request.dto';
import { SearchUserRequest } from './dto/search-user-request.dto';
export declare class UserService {
    private userRepository;
    private otpService;
    constructor(userRepository: Repository<User>, otpService: OtpService);
    searchUser(request: SearchUserRequest): Promise<import("../shared/dtos/paging-response.dto").PagingResponse<User>>;
    exists(id: number): Promise<boolean>;
    findOneById(id: number): Promise<User>;
    findOneByUsername(username: string): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    addUser(request: AddUserWithRoleRequest, hashPassword?: boolean): Promise<any>;
    updateStatus(id: number, status: EntityStatus): Promise<boolean>;
    updateFirstLastName(id: number, firstName: string, lastName: string): Promise<boolean>;
    updateTeacherProfile(id: number, bio: string, introduction: string): Promise<boolean>;
    updateEmail(id: number, email: string, otp: string): Promise<boolean>;
    updatePassword(id: number, newPassword: string): Promise<boolean>;
    updateRole(id: number, newRole: UserRole): Promise<boolean>;
    private hashPassword;
    comparePassword(password: string, hash: string): Promise<boolean>;
}
