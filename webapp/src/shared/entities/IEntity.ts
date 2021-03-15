import { EntityStatus } from "../enums/EntityStatus";

export interface IEntity {
  status?: EntityStatus;
  createdDate?: Date;
  updatedDate?: Date;
}