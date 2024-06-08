"use client";

import { Fragment, useState } from "react";
import AllUsersStatistics from "../content/AllUsersStatistics";
import ResourceStatistics from "../content/ResourceStatistics";
import CreateResourceForm from "../form/CreateResourceForm";

enum ResourceManagementTab {
  DETAILS = "DETAILS",
  ITEMS = "ITEMS",
  STATS = "STATS",
}

type ResourceManagementTabsProps = {
  id: string;
};

const ResourceManagementTabs = ({ id }: ResourceManagementTabsProps) => {
  const [activeTab, setActiveTab] = useState<ResourceManagementTab>(
    ResourceManagementTab.DETAILS
  );

  const handleSetActiveTab = (tab: ResourceManagementTab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-4">
      <ul
        className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
        role="tablist"
      >
        <li className="w-full">
          <button
            type="button"
            className={`inline-block w-full p-4 rounded-tl-lg focus:outline-none ${activeTab === ResourceManagementTab.DETAILS ? "bg-gray-500" : "bg-gray-700"} hover:bg-gray-900`}
            onClick={() => handleSetActiveTab(ResourceManagementTab.DETAILS)}
          >
            Details
          </button>
        </li>
        <li className="w-full">
          <button
            type="button"
            className={`inline-block w-full p-4  focus:outline-none ${activeTab === ResourceManagementTab.ITEMS ? "bg-gray-500" : "bg-gray-700"} hover:bg-gray-900`}
            onClick={() => handleSetActiveTab(ResourceManagementTab.ITEMS)}
          >
            Items
          </button>
        </li>
        <li className="w-full">
          <button
            type="button"
            className={`inline-block w-full p-4 rounded-tr-lg focus:outline-none ${activeTab === ResourceManagementTab.ITEMS ? "bg-gray-500" : "bg-gray-700"} hover:bg-gray-900`}
            onClick={() => handleSetActiveTab(ResourceManagementTab.ITEMS)}
          >
            Stats
          </button>
        </li>
      </ul>
      <div className="border-t border-gray-200 dark:border-gray-600">
        <div className="pt-4 text-white">
          {activeTab === ResourceManagementTab.DETAILS && (
            <Fragment>
              <CreateResourceForm open={true} showHeader={false} editId={id} />
            </Fragment>
          )}
          {activeTab === ResourceManagementTab.ITEMS && (
            <Fragment>
              <AllUsersStatistics />
            </Fragment>
          )}
          {activeTab === ResourceManagementTab.STATS && (
            <Fragment>
              <ResourceStatistics />
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
  );
};

export default ResourceManagementTabs;
