import { ConfigService } from "@nestjs/config";
import { Cache } from "cache-manager";
export declare class OtpService {
    private cacheManager;
    private config;
    private readonly OTP_LENGTH;
    constructor(cacheManager: Cache, config: ConfigService);
    generateOtp(sessionId: string): Promise<any>;
    checkOtp(otp: string, sessionId: string): Promise<boolean>;
}
