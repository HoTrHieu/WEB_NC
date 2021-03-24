import { UserRole } from 'src/shared/enums/user-role';

export interface JwtPayload {
  sub: number;
  role: UserRole;
}
