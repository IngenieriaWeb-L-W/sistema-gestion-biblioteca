import Image from "next/image";
import Link from "next/link";
import React from "react";

export const LandingNavbar = () => {
  return (
    <React.Fragment>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 sm:py-2 dark:bg-gray-800 dark:border-gray-700">
        <div className="container  mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <Link href="/" className="flex mr-4 ml-2">
                <Image
                  src="/images/logos/logo.png"
                  alt="BookHub logo"
                  width="40"
                  height="25"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  BookHub
                </span>
              </Link>
              <div className="hidden sm:flex sm:ml-6">
                <ul className="flex space-x-8">
                  <li>
                    <Link
                      href="/test"
                      className="text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/test"
                      className="text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500"
                      aria-current="page"
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/test"
                      className="text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500"
                      aria-current="page"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/test"
                      className="text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500"
                      aria-current="page"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <Link
                href="/test"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                <svg
                  className="w-5 h-5 mr-2 -ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  ></path>
                </svg>
                Login/Register
              </Link>
              <button
                data-collapse-toggle="mobile-menu"
                type="button"
                className="inline-flex items-center justify-center p-2 ml-3 text-gray-400 rounded-lg sm:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-300 dark:hover:bg-gray-700 dark:hover:text-white"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden sm:hidden" id="mobile-menu">
          <ul className="pt-2">
            <li>
              <Link
                href="/test"
                className="block py-2 pl-3 pr-4 text-base font-normal text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-white"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/test"
                className="block px-3 py-2 text-base font-normal text-gray-600 border-b border-gray-100 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-white"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                href="/test"
                className="block px-3 py-2 text-base font-normal text-gray-600 border-b border-gray-100 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-white"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/test"
                className="block px-3 py-2 text-base font-normal text-gray-600 border-b border-gray-100 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-white"
              >
                Calendar
              </Link>
            </li>
            <li className="block">
              <Link
                href="/test"
                className="inline-flex items-center w-full px-3 py-2 text-base font-normal text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  ></path>
                </svg>
                Login/Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};
