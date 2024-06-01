import UserRole from "../user/Role";

export interface AuthCredentials {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  imageUrl: string;
  address?: string;
  phone?: string;
  active: boolean;
  roles: UserRole[];
  createdAt: Date;
}
