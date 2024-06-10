"use client";

import { Fragment, useState } from "react";

import Image from "next/image";

import useLoansTable, { LoansFilter } from "@/hooks/use-loans-table";
import UserTablePagination from "../pagination/UserTablePagination";
import { InstanceLoan } from "@/interfaces/loan/Loan";
import { useResources } from "@/hooks/use-resources";

const LoansTable = () => {
  const [usersFilter /*, setUsersFilter */] = useState<LoansFilter>({
    search: "",
    pagination: { page: 0, limit: 25 },
  });

  const { records /*, total */ } = useLoansTable(usersFilter);

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
                      Email
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Phone number
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
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  {records.map((loan) => (
                    <LoanRow key={loan.id} loan={loan} />
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

export const LoanRow = ({ loan }: LoanRowProps) => {
  const {} = useResources(loan.);
  return (
    <tr key={loan.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
      <td className="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
        <Image
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
          src={loan.}
          alt={"User avatar"}
        />
        <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
          <div className="text-base font-semibold text-gray-900 dark:text-white">
            {loan.firstName} {loan.lastName}
          </div>
        </div>
      </td>
      <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
        {loan.email}
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {loan.address}
      </td>
      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {loan.phone}
      </td>
      <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
        <div className="flex items-center">
          {loan.active ? (
            <span className="inline-flex items-center justify-center h-6 px-2 text-xs font-semibold text-white bg-green-500 rounded-full">
              Active
            </span>
          ) : (
            <span className="inline-flex items-center justify-center h-6 px-2 text-xs font-semibold text-white bg-red-500 rounded-full">
              Inactive
            </span>
          )}
        </div>
      </td>
      <td className="p-4 space-x-2 whitespace-nowrap">
        {loan.active ? (
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
          >
            Delete user
          </button>
        ) : (
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
          >
            Restore User
          </button>
        )}
      </td>
    </tr>
  );
};

export default LoansTable;
