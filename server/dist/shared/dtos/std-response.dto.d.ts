export declare class StdResponse<T> {
    code: number;
    result: T;
    static of<R>(code: number, result: R): StdResponse<R>;
}
