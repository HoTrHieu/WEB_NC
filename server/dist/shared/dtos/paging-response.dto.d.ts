export declare class PagingResponse<T> {
    page: number;
    pageSize: number;
    total: number;
    items: T[];
    static of<T>(page: number, pageSize: number, total: number, items: T[]): PagingResponse<T>;
}
