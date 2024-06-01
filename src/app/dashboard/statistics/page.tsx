"use client";

import AllUsersStatistics from "@/components/content/AllUsersStatistics";
import OwnedStatistics from "@/components/content/OwnedStatistics";
import Link from "next/link";
import { Fragment, useState } from "react";

enum StatisticsTab {
  YOURS = "YOURS",
  ALL_USERS = "ALL_USERS",
}

const StatisticsPage = () => {
  const [activeTab, setActiveTab] = useState<StatisticsTab>(
    StatisticsTab.YOURS
  );

  const handleSetActiveTab = (tab: StatisticsTab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="mt-14 sm:p-6">
        <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">
          Full list of useful statistics about books, loans and more.
        </h3>

        <ul
          className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
          role="tablist"
        >
          <li className="w-full">
            <button
              type="button"
              className={`inline-block w-full p-4 rounded-tl-lg focus:outline-none ${activeTab === StatisticsTab.YOURS ? "bg-gray-500" : "bg-gray-700"} hover:bg-gray-900`}
              onClick={() => handleSetActiveTab(StatisticsTab.YOURS)}
            >
              Yours
            </button>
          </li>
          <li className="w-full">
            <button
              type="button"
              className={`inline-block w-full p-4 rounded-tr-lg focus:outline-none ${activeTab === StatisticsTab.ALL_USERS ? "bg-gray-500" : "bg-gray-700"} hover:bg-gray-900`}
              onClick={() => handleSetActiveTab(StatisticsTab.ALL_USERS)}
            >
              All Users
            </button>
          </li>
        </ul>
        <div className="border-t border-gray-200 dark:border-gray-600">
          <div className="pt-4 text-white">
            {activeTab === StatisticsTab.YOURS && (
              <Fragment>
                <OwnedStatistics />
              </Fragment>
            )}
            {activeTab === StatisticsTab.ALL_USERS && (
              <Fragment>
                <AllUsersStatistics />
              </Fragment>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between pt-3 mt-5 border-t border-gray-200 sm:pt-6 dark:border-gray-700">
          <div>
            <button
              className="inline-flex bg-blue-800 items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              type="button"
            >
              Change period
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
