import { Resource } from "./Resource";

export interface Publisher {
  id: string;
  imageUrl: string;
  name: string;
  createdAt: string;
  resources: Resource[];
}
