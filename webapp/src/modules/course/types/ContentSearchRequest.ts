import { OrderDirection } from "../../../shared/enums/OrderDirection";
import { ISearchRequest } from "../../../types/ISearchRequest";
import { CourseOrderBy } from "../enums/CourseOrderBy";

export interface IContentSearchRequest extends ISearchRequest {
  categoryIds?: number[];
  orderBy?: CourseOrderBy;
  orderDirection?: OrderDirection;
}