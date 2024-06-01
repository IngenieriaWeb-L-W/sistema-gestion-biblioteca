"use client";

import { Fragment, useState } from "react";
import UserTablePagination from "../pagination/UserTablePagination";
import Image from "next/image";
import useUsersTable, { Election, UsersFilter } from "@/hooks/use-users-table";

const UsersTable = () => {
  const [usersFilter, setUsersFilter] = useState<UsersFilter>({
    role: "",
    search: "",
    status: Election.BOTH,
    pagination: { page: 0, limit: 25 },
  });

  const { records, total } = useUsersTable(usersFilter);

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
                      Biography
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Position
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Country
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
                  {records.map((user) => (
                    <tr
                      key={user.id}
                      className="hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <td className="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
                        <Image
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-full"
                          src={user.imageUrl}
                          alt={"User avatar"}
                        />
                        <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                          <div className="text-base font-semibold text-gray-900 dark:text-white">
                            Name
                          </div>
                          <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            Email
                          </div>
                        </div>
                      </td>
                      <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
                        Biography
                      </td>
                      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Position
                      </td>
                      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Country
                      </td>
                      <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="flex items-center">
                          Active{" "}
                          <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>{" "}
                          Else{" "}
                          <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>{" "}
                          End status
                        </div>
                      </td>
                      <td className="p-4 space-x-2 whitespace-nowrap">
                        <button
                          type="button"
                          data-modal-target="delete-user-modal"
                          data-modal-toggle="delete-user-modal"
                          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                        >
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          Delete user
                        </button>
                      </td>
                    </tr>
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

export default UsersTable;
