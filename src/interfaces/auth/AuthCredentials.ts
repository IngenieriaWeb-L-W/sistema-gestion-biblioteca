export interface AuthCredentials {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  imageUrl: string;
  active: boolean;
  roles: string[];
  createdAt: Date;
}
