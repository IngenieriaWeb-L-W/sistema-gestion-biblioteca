import { TransactionType } from "@/interfaces/loan/Transaction";

type ResourceTypeChipProps = {
  type: TransactionType;
};

export const ResourceTypeChip = ({ type }: ResourceTypeChipProps) => {
  if (type === TransactionType.RESOURCE_LOAN) {
    return (
      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-blue-100 dark:border-blue-400 dark:bg-gray-700 dark:text-blue-400">
        Loaned
      </span>
    );
  }

  if (type === TransactionType.RESOURCE_RETURN) {
    return (
      <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-green-100 dark:border-green-400 dark:bg-gray-700 dark:text-green-400">
        Returned
      </span>
    );
  }

  if (type === TransactionType.ISSUE_REPORT) {
    return (
      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-yellow-100 dark:border-yellow-400 dark:bg-gray-700 dark:text-yellow-400">
        Issue
      </span>
    );
  }

  if (type === TransactionType.DAMAGE_REPORT) {
    return (
      <span className="bg-orange-100 text-orange-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-red-100 dark:border-red-400 dark:bg-gray-700 dark:text-red-400">
        Damage
      </span>
    );
  }

  if (type === TransactionType.LOSS_REPORT) {
    return (
      <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md border border-red-100 dark:border-red-400 dark:bg-gray-700 dark:text-red-400">
        Loss
      </span>
    );
  }

  return <></>;
};
