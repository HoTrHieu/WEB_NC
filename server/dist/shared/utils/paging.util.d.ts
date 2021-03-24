import { FindManyOptions, Repository, SelectQueryBuilder } from 'typeorm';
import { PagingRequest } from '../dtos/paging-request.dto';
import { PagingResponse } from '../dtos/paging-response.dto';
export declare class PagingUtil {
    static paginate<T>(repository: Repository<T>, paging: PagingRequest, options?: FindManyOptions<T>): Promise<PagingResponse<T>>;
    static paginateByQb<T>(queryBuilder: SelectQueryBuilder<T>, paging: PagingRequest): Promise<PagingResponse<T>>;
}
