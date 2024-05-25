export enum TransactionType {
  USER_REGISTRATION = "USER_REGISTRATION",
  BOOK_REGISTRATION = "BOOK_REGISTRATION",
  RESOURCE_LOAN = "RESOURCE_LOAN",
  RESOURCE_RETURN = "RESOURCE_RETURN",
  ISSUE_REPORT = "ISSUE_REPORT",
  DAMAGE_REPORT = "DAMAGE_REPORT",
  LOSS_REPORT = "LOSS_REPORT",
}

export interface LoanTransaction {
  type: TransactionType;
  userId: string;
  createdAt: Date;
}
