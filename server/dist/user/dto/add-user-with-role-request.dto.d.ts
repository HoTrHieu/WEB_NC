import { Profile } from 'passport-google-oauth20';
import { UserRole } from 'src/shared/enums/user-role';
import { AddUserRequest } from './add-user-request.dto';
export declare class AddUserWithRoleRequest extends AddUserRequest {
    role: UserRole;
    static of(addUserRequest: AddUserRequest): AddUserWithRoleRequest;
    static ofGoogleProfile(profile: Profile): AddUserWithRoleRequest;
}
