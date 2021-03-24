import { PagingRequest } from './paging-request.dto';
export declare class SearchRequest extends PagingRequest {
    searchTerm?: string;
    get isSearchTermExists(): boolean;
}
