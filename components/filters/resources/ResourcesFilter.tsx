import React, { Fragment } from "react";

import { useResourceCategory } from "@/hooks/use-resource-category";
import { ResourceTypes } from "@/interfaces/resource/Type";

export const ResourcesFilter = () => {
  const { records: categories, total } = useResourceCategory();

  return (
    <Fragment>
      <div className="bg-gray-900 py-5 px-3 lg:mt-8 grid grid-cols-12 items-center gap-2 sm:gap-3">
        <div className="col-span-6">
          <input
            type="text"
            id="hero-input"
            name="hero-input"
            className="py-3 w-full px-4 block xl:min-w-72 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
            placeholder="Search for resources"
          />
        </div>
        <div className="col-span-3 bg-blue-200 h-full">
          <select
            className="w-full bg-gray-950 text-white h-full p-1"
            name=""
            id=""
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-3 bg-blue-200 h-full">
          <select
            className="w-full bg-gray-950 text-white h-full p-2"
            name=""
            id=""
          >
            {Object.keys(ResourceTypes).map((resourceType) => (
              <option key={resourceType} value={resourceType}>
                <div>{resourceType} </div>
              </option>
            ))}
          </select>
        </div>
      </div>
    </Fragment>
  );
};
