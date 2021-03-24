import { SearchRequest } from 'src/shared/dtos/search-request.dto';
import { OrderDirection } from 'src/shared/enums/order-direction';
import { CourseOrderBy } from '../enums/course-order-by';
export declare class CourseSearchRequest extends SearchRequest {
    ids?: number[];
    categoryIds?: number[];
    fromPrice?: number;
    toPrice?: number;
    fromStar?: number;
    toStar?: number;
    orderBy?: CourseOrderBy;
    orderDirection?: OrderDirection;
    onlyWatchList?: boolean;
    onlyEnrollment?: boolean;
    creatorId: number;
    getIds(): any;
    getCategoryIds(): any;
    get isSort(): boolean;
    get isCategoryIdsExists(): boolean;
    get isIdsExists(): boolean;
    get isFromPriceExists(): boolean;
    get isToPriceExists(): boolean;
    get isFromStarExists(): boolean;
    get isToStarExists(): boolean;
    get isOnlyWatchListExists(): boolean;
    get isOnlyEnrollmentExists(): boolean;
    get isCreatorIdExists(): boolean;
    get isSearching(): boolean;
}
