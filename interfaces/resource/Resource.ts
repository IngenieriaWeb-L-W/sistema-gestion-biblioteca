import { ResourceCategory } from "./Category";
import { ResourceDetail } from "./Detail";
import { ResourceTypes } from "./Type";

export interface Resource {
  id: string; // UUID
  name: string;
  shortDescription: string;
  imageUrl: string;
  edition: string;
  categories: ResourceCategory[];
  detail?: ResourceDetail;
  type: ResourceTypes;
  createdAt: Date;
  updatedAt: Date;
}
