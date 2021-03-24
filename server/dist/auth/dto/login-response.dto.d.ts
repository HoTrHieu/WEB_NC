export declare class LoginResponse {
    accessToken: string;
    refreshToken: string;
    static of(accessToken: string, refreshToken: string): LoginResponse;
}
