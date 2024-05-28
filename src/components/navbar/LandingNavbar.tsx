"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { useAuth } from "@/hooks/use-auth";

export const LandingNavbar = () => {
  const { login } = useAuth();

  const handleSignIn = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    login("google", true, "/dashboard");
  };

  return (
    <React.Fragment>
      <nav className="fixed top-0 z-50 w-full border-b border-gray-200 sm:py-2 dark:bg-gray-800 dark:border-gray-700">
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
                      href="landing/books"
                      className="text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500"
                      aria-current="page"
                    >
                      Books
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="landing/testimonials"
                      className="text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500"
                      aria-current="page"
                    >
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="landing/contributors"
                      className="text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500"
                      aria-current="page"
                    >
                      Technologies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="landing/contributors"
                      className="text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500"
                      aria-current="page"
                    >
                      Contributors
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                <button
                  onClick={handleSignIn}
                  className="flex items-center  dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <svg
                    className="h-6 w-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="800px"
                    height="800px"
                    viewBox="-0.5 0 48 48"
                    version="1.1"
                  >
                    {" "}
                    <title>Google-color</title>{" "}
                    <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                    <g
                      id="Icons"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      {" "}
                      <g
                        id="Color-"
                        transform="translate(-401.000000, -860.000000)"
                      >
                        {" "}
                        <g
                          id="Google"
                          transform="translate(401.000000, 860.000000)"
                        >
                          {" "}
                          <path
                            d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                            id="Fill-1"
                            fill="#FBBC05"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                            id="Fill-2"
                            fill="#EB4335"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                            id="Fill-3"
                            fill="#34A853"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                            id="Fill-4"
                            fill="#4285F4"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </svg>
                  <span>Continue with Google</span>
                </button>
              </div>

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
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
