"use client";

import useFavoriteResources from "@/hooks/use-favorite-resources";
import {
  ResourceTypes,
  getResourceTypeByString,
} from "@/interfaces/resource/Type";
import { useState } from "react";
import { ResourceCard } from "../card/ResourceCard";
import ResourcesSkeleton from "../skeleton/ResourcesSkeleton";
import Link from "next/link";

const FavoriteResources = () => {
  const [activeTab, setActiveTab] = useState<ResourceTypes>(ResourceTypes.BOOK);
  const { records } = useFavoriteResources(activeTab);

  const handleSetActiveTab = (tab: ResourceTypes) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="p-4">
        <ul
          className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
          role="tablist"
        >
          {Object.keys(ResourceTypes)
            .filter((key) => key !== ResourceTypes.ALL)
            .map((key) => (
              <li key={key} className="w-full">
                <button
                  type="button"
                  className={`inline-block w-full p-4 focus:outline-none hover:bg-gray-900 ${activeTab === getResourceTypeByString(key) ? "bg-gray-500" : "bg-gray-700"}`}
                  onClick={() =>
                    handleSetActiveTab(getResourceTypeByString(key))
                  }
                >
                  {key}
                </button>
              </li>
            ))}
        </ul>

        {records.length > 0 ? (
          <div className="py-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 px-3 gap-1 sm:gap-2 md:gap-2 lg:gap-3">
            {records.map((resource) => (
              <ResourceCard
                key={resource.id}
                baseRoute="landing"
                resource={resource}
              />
            ))}
          </div>
        ) : (
          <ResourcesSkeleton cols={{ lg: 4, md: 2, sm: 1 }} count={12} />
        )}
      </div>

      <div>
        <Link
          href="/landing/resources"
          className="inline-flex bg-blue-800 items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          See all resources
        </Link>
      </div>
    </div>
  );
};

export default FavoriteResources;
