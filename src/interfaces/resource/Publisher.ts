import { Resource } from "./Resource";

export interface Publisher {
  id?: number;
  imageUrl: string;
  name: string;
  url: string;
  createdAt?: string;
  resources?: Resource[];
}

export interface PublisherCreate {
  image: File | null;
  name: string;
  url: string;
}
