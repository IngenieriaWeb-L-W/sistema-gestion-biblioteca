import { Category } from "./Category";
import { ResourceDetail } from "./Detail";
import { Publisher } from "./Publisher";
import { ResourceTypes } from "./Type";

export interface Resource {
  id: string; // UUID
  name: string;
  shortDescription: string;
  imageUrl: string;
  slug: string;
  edition: string;
  categories: Category[];
  detail?: ResourceDetail;
  publisher: Publisher;
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
  author: string;
  publicationYear: number;
  publisher: number;
}
