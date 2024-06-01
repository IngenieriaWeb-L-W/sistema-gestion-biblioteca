"use client";

import React, { Fragment } from "react";

import Image from "next/image";
import Link from "next/link";

import { useSelector } from "react-redux";

import { selectAuthentication } from "@/config/redux/reducers/authentication.reducer";
import { useAuth } from "@/hooks/use-auth";

export const AdminNavbar = () => {
  const { email, imageUrl, firstName, lastName } =
    useSelector(selectAuthentication);
  const { logout } = useAuth();

  const handleSignOut = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    logout(true, "/landing");
  };

  return (
    <Fragment>
      <nav className="fixed top-0 z-30 w-full border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-2 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                id="toggleSidebarMobile"
                aria-expanded="true"
                aria-controls="sidebar"
                className="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <svg
                  id="toggleSidebarMobileHamburger"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  id="toggleSidebarMobileClose"
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <Link href="/dashboard" className="flex ml-2 md:mr-24">
                <Image
                  src="/images/logos/logo.png"
                  alt="BookHub logo"
                  width={35}
                  height={20}
                />
                <span className="self-center ml-1 text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  BookHub
                </span>
              </Link>

              <div className="hidden sm:flex sm:ml-6">
                <ul className="flex space-x-8">
                  <li>
                    <Link
                      href="/dashboard/loans"
                      className="text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500"
                      aria-current="page"
                    >
                      Loans
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/transactions"
                      className="text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500"
                      aria-current="page"
                    >
                      Transactions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/statistics"
                      className="text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500"
                      aria-current="page"
                    >
                      Statistics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard/profile"
                      className="text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500"
                      aria-current="page"
                    >
                      Profile
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div>
                  <div
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    id="user-menu-button-2"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-2"
                  >
                    {email && (
                      <Fragment>
                        <p className="my-auto text-md text-white">
                          {firstName} {lastName}
                        </p>
                        <Image
                          className="mx-3 mt-1 w-10 h-10 rounded-full"
                          src={imageUrl}
                          width={50}
                          height={50}
                          alt="User profile picture"
                        />
                      </Fragment>
                    )}
                    <button
                      type="button"
                      onClick={handleSignOut}
                      className="p-3 bg-blue-500 mx-3 rounded-md"
                    >
                      Logout
                    </button>
                  </div>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-2"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <Link
                        href="/test"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/test"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/test"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Earnings
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/test"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
