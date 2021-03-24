import { ISearchRequest } from "../../../types/ISearchRequest";

export interface ISearchCategoryRequest extends ISearchRequest {
  all?: boolean;
}