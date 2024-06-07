import { Category } from "./Category";
import { ResourceDetail } from "./Detail";
import { ResourceTypes } from "./Type";

export interface Resource {
  id: string; // UUID
  name: string;
  shortDescription: string;
  imageUrl: string;
  edition: string;
  categories: Category[];
  detail?: ResourceDetail;
  type: ResourceTypes;
  createdAt: Date;
  updatedAt: Date;
}

export interface ResourcePreview {
  id: string;
  name: string;
  type: ResourceTypes;
  imageUrl: string;
}

export interface ResourceCreate {
  name: string;
  shortDescription: string;
  image: File | null;
  edition: string;
  categories: number[];
  type: ResourceTypes;
  paragraphs: string[];
  isbn?: string;
  authors: string[];
  publicationYear: Date;
}
