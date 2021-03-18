import { OrderDirection } from "../../../shared/enums/OrderDirection";
import { ISearchRequest } from "../../../types/ISearchRequest";
import { CourseOrderBy } from "../enums/CourseOrderBy";

export interface ICourseSearchRequest extends ISearchRequest {
  categoryIds?: number[];
  orderBy?: CourseOrderBy;
  orderDirection?: OrderDirection;
  fromPrice?: number;
  toPrice?: number;
  fromStar?: number;
  toStar?: number;
  onlyWatchList?: boolean;
}