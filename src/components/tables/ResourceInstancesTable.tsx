"use client";

import { formatDate } from "@/common/utils/date-transformers";
import useResourceInstances from "@/hooks/use-resource-instances";
import { ResourceInstance } from "@/interfaces/resource/Instance";
import React, { Fragment, useState } from "react";
import TableResourcesFilter from "../filters/resources/TableResourcesFilter";
import ResourceManagementTabs from "../tabs/ResourceManagementTabs";

type ResourceInstancesTableProps = {
  id: string;
};

const ResourceInstancesTable = ({ id }: ResourceInstancesTableProps) => {
  const { records: instances } = useResourceInstances({ id });
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
                      Name
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      Lang
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
                    >
                      status
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
                  {instances.map((instance) => (
                    <ResourceInstanceRow key={instance.id} {...instance} />
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

const ResourceInstanceRow = (instance: ResourceInstance) => {
  const [showEditPanel, setShowEditPanel] = useState(false);

  const handleToggleEdit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    setShowEditPanel(!showEditPanel);
  };

  return (
    <Fragment>
      <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
        <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
          {instance.name}
        </td>

        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {instance.lang}
        </td>

        <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
          {instance.status}
        </td>

        <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
          {formatDate(instance.createdAt, false)}
        </td>

        <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
          {formatDate(instance.updatedAt, false)}
        </td>

        <td className="p-4 space-x-2 whitespace-nowrap">
          <button
            type="button"
            onClick={handleToggleEdit}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-blue-900"
          >
            Edit
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
            <ResourceManagementTabs id={instance.id} />
          </td>
        </tr>
      )}
    </Fragment>
  );
};

export default ResourceInstancesTable;
