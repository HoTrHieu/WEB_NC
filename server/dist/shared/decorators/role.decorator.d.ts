import { UserRole } from '../enums/user-role';
export declare const ROLE_KEY = "role";
export declare const Role: (...roles: UserRole[]) => import("@nestjs/common").CustomDecorator<string>;
