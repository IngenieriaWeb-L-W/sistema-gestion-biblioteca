"use client";

import { formatDate } from "@/common/utils/date-transformers";
import { useAppDispatch } from "@/config/redux/store.config";
import { useForm } from "@/hooks/use-form";
import useResourceInstances from "@/hooks/use-resource-instances";
import {
  InstanceStatus,
  ResourceInstance,
} from "@/interfaces/instance/Instance";
import { changeInstanceStatusMiddleware } from "@/middleware/resources-instances.middleware";
import React, { Fragment, useState } from "react";
import TableResourceInstancesFilter from "../filters/resources/TableResourcesInstancesFilter";
import CreateResourceInstancesForm from "../form/CreateResourceInstanceForm";

type ResourceInstancesTableProps = {
  id: string;
};

const ResourceInstancesTable = ({ id }: ResourceInstancesTableProps) => {
  const { records: instances } = useResourceInstances({ id });
  const [showCreateForm, setShowCreateForm] = useState(false);

  if (instances.length === 0)
    return (
      <div>
        <CreateResourceInstancesForm
          open={showCreateForm}
          setOpen={setShowCreateForm}
          resourceId={id}
        />

        <p className="my-2 py-5 rounded-md w-full bg-gray-600 text-white text-center">
          No instances found
        </p>
      </div>
    );

  return (
    <React.Fragment>
      <CreateResourceInstancesForm
        open={showCreateForm}
        setOpen={setShowCreateForm}
        resourceId={id}
      />

      <TableResourceInstancesFilter />

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
                    <ResourceInstanceRow
                      key={instance.id}
                      resourceId={id}
                      instance={instance}
                    />
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

type ResourceInstanceRowProps = {
  resourceId: string;
  instance: ResourceInstance;
};

const ResourceInstanceRow = ({
  resourceId,
  instance,
}: ResourceInstanceRowProps) => {
  const [changingStatus, setChangingStatus] = useState(false);
  const dispatch = useAppDispatch();
  const [status, setStatus] = useState(instance.status);
  const handleToggleEdit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    setChangingStatus(!changingStatus);
  };

  const { formValues, handleSelectChange } = useForm({
    status: instance.status,
  });

  const handleConfirmEdit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    dispatch(
      changeInstanceStatusMiddleware(resourceId, instance.id, formValues.status)
    ).then((result) => {
      if (result) {
        setStatus(result.status);
        setChangingStatus(false);
      }
    });
  };

  return (
    <Fragment>
      <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
        <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
          {instance.name}
        </td>

        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {instance.lang.replaceAll("LANG_", "")}
        </td>

        <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">
          {status}
        </td>

        <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
          {formatDate(instance.createdAt, false)}
        </td>

        <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
          {formatDate(instance.updatedAt, false)}
        </td>

        {changingStatus ? (
          <td className="p-4 space-x-2 whitespace-nowrap">
            <button
              type="button"
              onClick={handleToggleEdit}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-blue-900"
            >
              Cancel
            </button>
            <select
              className=" bg-gray-950 text-white h-full p-2"
              name="status"
              value={formValues.status}
              onChange={handleSelectChange}
            >
              {Object.keys(InstanceStatus).map((status) => (
                <option key={status} value={status}>
                  <div>{status}</div>
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={handleConfirmEdit}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900"
            >
              Confirm
            </button>
          </td>
        ) : (
          <td className="p-4 space-x-2 whitespace-nowrap">
            <button
              type="button"
              onClick={handleToggleEdit}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-blue-900"
            >
              Change status
            </button>
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
            >
              Delete
            </button>
          </td>
        )}
      </tr>
    </Fragment>
  );
};

export default ResourceInstancesTable;
