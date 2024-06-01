import { UserAuth } from "./Auth";
import { UserContact } from "./Contact";
import UserRole from "./Role";

export interface User {
  id?: string;
  firstName: string;
  email: string;
  lastName: string;
  username: string;
  address?: string;
  phone?: string;
  active: boolean;
  imageUrl: string;
  contact?: UserContact;
  auth?: UserAuth;
  roles: UserRole[];
  createdAt: Date;
  updatedAt: Date;
}
