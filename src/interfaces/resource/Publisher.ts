import { Resource } from "./Resource";

export interface Publisher {
  id?: string;
  imageUrl: string;
  name: string;
  url: string;
  createdAt?: string;
  resources: Resource[];
}
