import { IPagingRequest } from "./IPagingRequest";

export interface ISearchRequest extends IPagingRequest {
  searchTerm?: string;
}
