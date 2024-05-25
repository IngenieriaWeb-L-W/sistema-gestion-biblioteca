import { ResourceCategory } from "./Category";
import { ResourceDetail } from "./Detail";
import { ResourceType } from "./Type";

export interface Resource {
  id: string;
  shortDescription: string;
  imageUrl: string;
  edition: string;
  category: ResourceCategory;
  detail: ResourceDetail;
  type: ResourceType;
  createdAt: string;
  updatedAt: string;
}
