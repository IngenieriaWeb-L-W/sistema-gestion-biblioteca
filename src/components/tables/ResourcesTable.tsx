"use client";

import { formatDate } from "@/common/utils/date-transformers";
import { useResource } from "@/hooks/use-resource";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import TableResourcesFilter from "../filters/resources/TableResourcesFilter";
import { Resource } from "@/interfaces/resource/Resource";
import ResourceManagementTabs from "../tabs/ResourceManagementTabs";
import { wordToHexColor } from "@/common/utils/color-generator";

const ResourcesTable = () => {
  const { records: resources } = useResource();
  return (
    <React.Fragment>
      <TableResourcesFilter />

      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Image & Name
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Edition
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Categories
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Created At
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Updated At
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  {resources.map((resource) => (
                    <ResourceRow key={resource.id} {...resource} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const ResourceRow = (resource: Resource) => {
  const [showEditPanel, setShowEditPanel] = useState(false);

  const handleToggleEdit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    setShowEditPanel(!showEditPanel);
  };

  return (
    <Fragment>
      <tr
        key={resource.id}
        className="hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <td className="flex items-center p-2 mr-12 space-x-6 whitespace-nowrap">
          <Image
            width={500}
            height={800}
            className="w-32 h-52"
            src={
              resource.imageUrl || "/images/default/default-resource-img.png"
            }
            alt={"User avatar"}
          />
          <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
            <div className="text-base font-semibold text-gray-900 dark:text-white">
              {resource.name}
            </div>
          </div>
        </td>
        <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
          <span
            className={`text-white opacity-[0.8] px-3 py-2 rounded-lg`}
            style={{ backgroundColor: `${wordToHexColor(resource.type)}` }}
          >
            {resource.type}
          </span>
        </td>
        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {resource.edition}
        </td>
        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <div className="mt-4 flex flex-wrap gap-2">
            {resource.categories.map((category) => (
              <span
                key={category.id}
                className="py-1.5 px-2 bg-white text-gray-600 border border-gray-200 sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
              >
                {category.name}
              </span>
            ))}
          </div>
        </td>
        <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
          {formatDate(resource.createdAt, false)}
        </td>
        <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
          {formatDate(resource.createdAt, false)}
        </td>
        <td className="p-4 space-x-2 whitespace-nowrap">
          <button
            type="button"
            onClick={handleToggleEdit}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-blue-900"
          >
            {showEditPanel ? "Close Edit" : "Open Edit"}
          </button>
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
          >
            Delete
          </button>
        </td>
      </tr>
      {showEditPanel && (
        <tr>
          <td colSpan={7}>
            <ResourceManagementTabs id={resource.id} />
          </td>
        </tr>
      )}
    </Fragment>
  );
};

export default ResourcesTable;
