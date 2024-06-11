import { ResourcePreview } from "../resource/Resource";
import { User } from "../user/User";

export enum TransactionType {
  TRANSACTION_LOAN = "TRANSACTION_LOAN",
  TRANSACTION_RETURN = "TRANSACTION_RETURN",
  TRANSACTION_LOGIN = "TRANSACTION_LOGIN",
}

export interface LoanTransaction {
  id: string;
  user?: User;
  type: TransactionType;
  resource: ResourcePreview;
  createdAt: Date;
}
