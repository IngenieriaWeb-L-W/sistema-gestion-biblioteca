import { ResourceInstance } from "../instance/Instance";
import { User } from "../user/User";

export interface InstanceLoan {
  id: string;
  userId: User;
  instance: ResourceInstance;
  until: Date;
  createdAt: Date;
}
