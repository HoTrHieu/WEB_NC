export declare class BcryptUtil {
    static hash(text: string): Promise<string>;
    static compare(text: string, hash: string): Promise<boolean>;
}
