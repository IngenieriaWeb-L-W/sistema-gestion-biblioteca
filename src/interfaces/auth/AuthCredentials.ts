export interface AuthCredentials {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  imageUrl: string;
  address?: string;
  phone?: string;
  active: boolean;
  roles: string[];
  createdAt: Date;
}
