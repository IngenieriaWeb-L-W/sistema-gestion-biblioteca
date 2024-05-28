import { ResourcePreview } from "../resource/Resource";

export enum TransactionType {
  // USER_REGISTRATION = "USER_REGISTRATION",
  // BOOK_REGISTRATION = "BOOK_REGISTRATION",
  ALL = "ALL",
  RESOURCE_LOAN = "RESOURCE_LOAN",
  RESOURCE_RETURN = "RESOURCE_RETURN",
  ISSUE_REPORT = "ISSUE_REPORT",
  DAMAGE_REPORT = "DAMAGE_REPORT",
  LOSS_REPORT = "LOSS_REPORT",
}

export interface LoanTransaction {
  id: string;
  type: TransactionType;
  resource: ResourcePreview;
  createdAt: Date;
}
