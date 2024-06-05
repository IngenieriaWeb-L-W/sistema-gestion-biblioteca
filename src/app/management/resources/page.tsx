"use client";

import CategoriesManagement from "@/components/content/CategoriesManagement";
import PublishersManagement from "@/components/content/PublishersManagement";
import ResourcesManagement from "@/components/content/ResourcesManagement";
import Link from "next/link";
import { Fragment, useState } from "react";

enum ManagementTab {
  RESOURCES = "RESOURCES",
  CATEGORIES = "CATEGORIES",
  PUBLISHERS = "PUBLISHERS",
}

const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState<ManagementTab>(
    ManagementTab.RESOURCES
  );

  const handleSetActiveTab = (tab: ManagementTab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="px-4 pt-14 col-span-full xl:mb-2">
        <nav className="flex mb-5" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
            <li className="inline-flex items-center">
              <Link
                href="/dashboard"
                className="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5 mr-2.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Management
              </Link>
            </li>
            <li>
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
                  href="/dashboard/statistics"
                  className="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white"
                >
                  Resources
                </Link>
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
          Resources Management
        </h1>
      </div>
      <div className="p-4">
        <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">
          Full list of Publishers, Categories and Resources
        </h3>

        <ul
          className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
          role="tablist"
        >
          <li className="w-full">
            <button
              type="button"
              className={`inline-block w-full p-4 rounded-tl-lg focus:outline-none ${activeTab === ManagementTab.RESOURCES ? "bg-gray-500" : "bg-gray-700"} hover:bg-gray-900`}
              onClick={() => handleSetActiveTab(ManagementTab.RESOURCES)}
            >
              Resources
            </button>
          </li>
          <li className="w-full">
            <button
              type="button"
              className={`inline-block w-full p-4  focus:outline-none ${activeTab === ManagementTab.CATEGORIES ? "bg-gray-500" : "bg-gray-700"} hover:bg-gray-900`}
              onClick={() => handleSetActiveTab(ManagementTab.CATEGORIES)}
            >
              Categories
            </button>
          </li>
          <li className="w-full">
            <button
              type="button"
              className={`inline-block w-full p-4 rounded-tr-lg focus:outline-none ${activeTab === ManagementTab.PUBLISHERS ? "bg-gray-500" : "bg-gray-700"} hover:bg-gray-900`}
              onClick={() => handleSetActiveTab(ManagementTab.PUBLISHERS)}
            >
              Publishers
            </button>
          </li>
        </ul>
        <div className="border-t border-gray-200 dark:border-gray-600">
          <div className="pt-4 text-white">
            {activeTab === ManagementTab.RESOURCES && (
              <Fragment>
                <ResourcesManagement />
              </Fragment>
            )}
            {activeTab === ManagementTab.CATEGORIES && (
              <Fragment>
                <CategoriesManagement />
              </Fragment>
            )}
            {activeTab === ManagementTab.PUBLISHERS && (
              <Fragment>
                <PublishersManagement />
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
