"use client";

import { Fragment, useEffect, useState } from "react";

import { formatDate } from "@/common/utils/date-transformers";
import { LoansFilter, useOwnedLoansTable } from "@/hooks/use-owned-loans-table";
import { InstanceLoan } from "@/interfaces/loan/Loan";
import UserTablePagination from "../pagination/UserTablePagination";

export const OwnedLoansTable = () => {
  const [loansFilter /*, setUsersFilter */] = useState<LoansFilter>({
    search: "",
    pagination: { page: 1, limit: 25 },
  });

  const { records /*, total */ } = useOwnedLoansTable(loansFilter);

  return (
    <Fragment>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Lang
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Borrowed at
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Loaned until
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  {records.map((loan) => (
                    <OwnedLoanRow key={loan.id} loan={loan} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <UserTablePagination />
    </Fragment>
  );
};

type LoanRowProps = {
  loan: InstanceLoan;
};

const OwnedLoanRow = ({ loan }: LoanRowProps) => {
  const [isLoanPassed, setIsLoanPassed] = useState(false);
  const [loanLeftTime, setLoanLeftTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const until = new Date(loan.until);
      const diff = until.getTime() - now.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setLoanLeftTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [loan.until]);

  useEffect(() => {
    const timeout = setInterval(() => {
      setIsLoanPassed(new Date() > new Date(loan.until));
    }, 1000);
    return () => clearInterval(timeout);
  }, [loan.until]);

  return (
    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
      <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
        {loan.instance.name}
      </td>
      <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
        {loan.instance.lang}
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {loan.instance.status}
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {formatDate(loan.createdAt, true)}
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {formatDate(loan.until, true)}
      </td>
      <td className="p-4 space-x-2 whitespace-nowrap">
        {isLoanPassed ? (
          <span className="inline-flex items-center  text-sm font-medium text-center px-3 py-2 bg-red-500 rounded-md text-white focus:ring-4 focus:ring-red-300">
            Loan Passed
          </span>
        ) : (
          <span className="inline-flex items-center text-sm font-medium text-center text-white">
            Return in {loanLeftTime}
          </span>
        )}
      </td>
    </tr>
  );
};
