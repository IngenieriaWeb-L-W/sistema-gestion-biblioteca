export interface Category {
  id: number;
  name: string;
  createdAt?: Date;
}

export interface CategoryCreate {
  name: string;
}
