export enum TransactionType {
  USER_REGISTRATION = "USER_REGISTERED",
  USER_LOGGED_IN = "USER_LOGGED_IN",
  USER_BLOCKED = "USER_BLOCKED",
}

export interface AdminTransaction {
  type: TransactionType;
  userId: string;
  createdAt: Date;
}
