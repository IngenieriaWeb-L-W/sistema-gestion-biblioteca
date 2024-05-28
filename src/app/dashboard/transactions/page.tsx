import React from "react";

import Link from "next/link";

import { ResourceTypeChip } from "@/components/chip/TransactionTypeChip";
import { useTransaction } from "@/hooks/use-loan-transaction";
import { TransactionType } from "@/interfaces/loan/Transaction";

import { v4 as uuidV4 } from "uuid";

const Index = () => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(date);
  };

  const { records: transactions } = useTransaction();
  return (
    <React.Fragment>
      <div className="p-4 bg-white  shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <div className="items-center justify-between lg:flex">
          <div className="mb-4 lg:mb-0">
            <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Transactions
            </h3>
            <span className="text-base font-normal text-gray-500 dark:text-gray-400">
              This is a list of your latest transactions
            </span>
          </div>
          <div className="items-center sm:flex">
            <div className="flex items-center">
              <div className="bg-blue-200 h-full">
                <select
                  className="w-full bg-gray-950 text-white h-full p-2"
                  name=""
                  id=""
                >
                  {Object.keys(TransactionType).map((transactionType) => (
                    <option key={transactionType} value={transactionType}>
                      <div>{transactionType} </div>
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div date-rangepicker className="flex items-center space-x-4">
              <div className="relative">
                <input
                  name="start"
                  type="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="From"
                />
              </div>
              <div className="relative">
                <input
                  name="end"
                  type="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="To"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <div className="overflow-x-auto rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                      >
                        Resource
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                      >
                        Date & Time
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                      >
                        Reference number
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white dark:bg-gray-800">
                    {transactions.map(({ id, createdAt, resource, type }) => (
                      <tr key={id}>
                        <td className="p-4 whitespace-nowrap">
                          <ResourceTypeChip type={type} />
                        </td>
                        <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                          {`${resource.type.charAt(0).toUpperCase()}${resource.type
                            .toLowerCase()
                            .slice(1)
                            .replaceAll("_", " ")}`}
                          :{" "}
                          <span className="font-semibold">{resource.name}</span>
                        </td>
                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          {formatDate(createdAt)}
                        </td>
                        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                          {uuidV4()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 sm:pt-6">
          <div>
            <button
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              type="button"
              data-dropdown-toggle="transactions-dropdown"
            >
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
              id="transactions-dropdown"
            >
              <div className="px-4 py-3" role="none">
                <p
                  className="text-sm font-medium text-gray-900 truncate dark:text-white"
                  role="none"
                >
                  Sep 16, 2021 - Sep 22, 2021
                </p>
              </div>
              <ul className="py-1" role="none">
                <li>
                  <Link
                    href="/test"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    Yesterday
                  </Link>
                </li>
                <li>
                  <Link
                    href="/test"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    Today
                  </Link>
                </li>
                <li>
                  <Link
                    href="/test"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    Last 7 days
                  </Link>
                </li>
                <li>
                  <Link
                    href="/test"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    Last 30 days
                  </Link>
                </li>
                <li>
                  <Link
                    href="/test"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    Last 90 days
                  </Link>
                </li>
              </ul>
              <div className="py-1" role="none">
                <Link
                  href="/test"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  Custom...
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/test"
              className="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700"
            >
              <svg
                className="w-4 h-4 ml-1 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Index;
