import { UserRole } from 'src/shared/enums/user-role';
export declare class AuthUser {
    id: number;
    role: UserRole;
    static of(id: number, role: UserRole): AuthUser;
}
