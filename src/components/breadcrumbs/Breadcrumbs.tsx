import Image from "next/image";
import Link from "next/link";
import React from "react";

export type BreadcrumbsProp = {
  items: {
    title: string;
    href: string;
    iconPath?: string; // "/images/icons/home.svg"
  }[];
};

const Breadcrumbs = ({ items }: BreadcrumbsProp) => {
  return (
    <div className="mb-4 col-span-full xl:mb-2">
      <nav className="flex mb-5" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
          {items.map(({ title, href, iconPath }) => (
            <li key={title} className="inline-flex items-center">
              <Link
                href={href}
                className="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white"
              >
                {iconPath && (
                  <Image src={iconPath} alt="home" width={16} height={16} />
                )}
                {title}
              </Link>
            </li>
          ))}
          {/* <li>
          <div className="flex items-center">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <Link
              href="/dashboard/profile"
              className="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white"
            >
              profile
            </Link>
          </div>
        </li> */}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
