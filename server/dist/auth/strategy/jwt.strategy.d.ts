import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { AuthUser } from '../dto/auth-user.dto';
import { JwtPayload } from '../token/types/jwt-payload.type';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private config;
    constructor(config: ConfigService);
    validate(payload: JwtPayload): Promise<AuthUser>;
}
export {};
