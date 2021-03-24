import { SearchRequest } from 'src/shared/dtos/search-request.dto';
import { UserRole } from 'src/shared/enums/user-role';
export declare class SearchUserRequest extends SearchRequest {
    role: UserRole;
    get isRoleExists(): boolean;
}
