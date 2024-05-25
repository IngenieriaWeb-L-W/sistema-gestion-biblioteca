import { UserAuth } from "./Auth";
import { UserContact } from "./Contact";
import { UserRole } from "./Role";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  active: boolean;
  contact?: UserContact;
  auth?: UserAuth;
  roles: UserRole[];
  createdAt: Date;
  updatedAt: Date;
}
