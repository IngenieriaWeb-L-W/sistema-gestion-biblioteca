import Link from "next/link";
import React, { Fragment } from "react";

export const ResourcesFilter = () => {
  return (
    <Fragment>
      <div className="bg-red-500 py-5 px-3 top-10 z-50 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
        <div className="w-full sm:w-auto">
          <input
            type="text"
            id="hero-input"
            name="hero-input"
            className="py-3 px-4 block w-full xl:min-w-72 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="Search for resources"
          />
        </div>
        <Link
          className="text-xl text-white sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 font-semibold rounded-lg border border-transparent bg-blue-600  hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          href="/test"
        >
          <i className="bx bx-filter"></i>
        </Link>
      </div>
    </Fragment>
  );
};
