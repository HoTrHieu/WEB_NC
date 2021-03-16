import { ICategory } from "./ICategory";
import { IContent } from "./IContent";
import { IEntity } from "./IEntity";
import { IUser } from "./IUser";
import { IWatchList } from "./IWatchList";

export interface ICourse extends IEntity {
  id: number;
  title: string;
  subDescription: string;
  description: string;
  price: number;
  avatarPath: string;
  coverPath: string;
  totalEnrollment: number;
  avgStar: number;
  totalView: number;
  creatorId: number;
  categoryId: number;
  category: ICategory;
  creator: IUser;
  contents: IContent[];
  watchLists: IWatchList[];
}