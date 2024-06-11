"use client";

import React, { Fragment, useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { useSelector } from "react-redux";

import {
  changeActiveRole,
  selectAuthentication,
} from "@/config/redux/reducers/authentication.reducer";
import { useAppDispatch } from "@/config/redux/store.config";
import navbarItems, { NavbarLayout } from "@/data/navbar/navbar-items";
import { useAuth } from "@/hooks/use-auth";
import { useCart } from "@/hooks/use-cart";
import UserRole from "@/interfaces/user/Role";
import BorrowedResourcesCart from "../cart/BorrowedResourcesCart";

export const PrivateNavbar = () => {
  const { logout } = useAuth();
  const dispatch = useAppDispatch();
  const { syncCartItems } = useCart();
  const { email, imageUrl, firstName, lastName, activeRole, roles } =
    useSelector(selectAuthentication);
  const { items: cartItems, showCart, hideCart, open: cartIsOpen } = useCart();

  const [activeNavbar, setActiveNavbar] = useState<NavbarLayout>(
    navbarItems.find((item) => item.role === activeRole) || navbarItems[0]
  );

  const handleSignOut = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    logout(true, "/landing");
  };

  useEffect(() => {
    setActiveNavbar(
      navbarItems.find((item) => item.role === activeRole) || navbarItems[0]
    );
  }, [activeRole]);

  const handleChangeActiveRole = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    dispatch(changeActiveRole(event.target.value as UserRole));
  };

  const handleToggleCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    if (cartIsOpen) {
      hideCart();
    } else {
      showCart();
    }
  };

  useEffect(() => {
    syncCartItems();
  }, []);

  return (
    <Fragment>
      <nav className="fixed top-0 z-50 w-full border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-2 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button className="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
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
                  {activeNavbar.items.map(({ id, title, link /*, icon */ }) => (
                    <li key={id}>
                      <Link
                        href={link}
                        className="text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-primary-500"
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                  {activeRole === UserRole.ROLE_USER && (
                    <button
                      onClick={handleToggleCart}
                      className="bg-gray-700 relative rounded-sm mr-5 flex justify-center items-center"
                    >
                      <Image
                        className="p-1"
                        src="/icons/basket.svg"
                        width={40}
                        height={40}
                        alt="Basket icon"
                        title="Basket icon"
                      />
                      <span
                        className={`absolute px-2 py-0 rounded-lg ${cartItems.length === 0 ? "bg-red-500" : "bg-green-500"} top-[-0px] right-[-15px]`}
                      >
                        {cartItems.length}
                      </span>
                    </button>
                  )}
                  {email && (
                    <Fragment>
                      <div className="my-auto relative text-white">
                        <p className="">
                          {firstName} {lastName}
                        </p>
                        <br />
                        <div className="absolute flex justify-center items-center gap-1 py-0.5 top-5 rounded-md w-full">
                          {roles.length > 1 ? (
                            <select
                              className="bg-gray-900 w-full py-0.5 rounded-sm text-white"
                              onChange={handleChangeActiveRole}
                            >
                              {roles.map((role) => (
                                <option key={role} value={role}>
                                  {role.split("ROLE_")[1]}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <p className="">{roles[0]?.split("ROLE_")[1]}</p>
                          )}
                          {/* {roles.length > 0 && (
                            <Image
                              src="/icons/chevron-down.svg"
                              width={20}
                              height={20}
                              alt="Arrow down icon"
                            />
                          )} */}
                        </div>
                      </div>

                      <Link href="/dashboard/profile">
                        <Image
                          className="mx-3 mt-1 w-10 h-10 rounded-full"
                          src={imageUrl}
                          width={50}
                          height={50}
                          alt="User profile picture"
                        />
                      </Link>
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
            </div>
          </div>
        </div>
      </nav>

      {cartIsOpen && <BorrowedResourcesCart />}
    </Fragment>
  );
};
