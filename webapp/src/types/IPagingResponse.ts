export interface IPagingResponse<T> {
  page: number;
  pageSize: number;
  total: number;
  items: T[];
}
