import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../enums/user-role';

export const ROLE_KEY = 'role';
export const Role = (...roles: UserRole[]) => SetMetadata(ROLE_KEY, roles);
