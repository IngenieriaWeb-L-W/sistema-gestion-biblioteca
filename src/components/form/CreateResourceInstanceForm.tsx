"use client";

import resourceInstanceCreateSchema from "@/common/schemas/ResourceInstance.schema";
import {
  SeverityLevel,
  setGlobalAlert,
} from "@/config/redux/reducers/user-interface.reducer";
import { useAppDispatch } from "@/config/redux/store.config";
import { useForm } from "@/hooks/use-form";
import {
  InstanceLang,
  InstanceStatus,
  ResourceInstancesCreate,
} from "@/interfaces/instance/Instance";
import { ResourceTypes } from "@/interfaces/resource/Type";
import { createResourceInstancesMiddleware } from "@/middleware/resources-instances.middleware";
import React, { Fragment } from "react";
import * as Yup from "yup";

export type CreateResourceInstanceFormProps = {
  open: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  showHeader?: boolean;
  resourceId: string;
};

const initialFormValues: ResourceInstancesCreate = {
  lang: InstanceLang.LANG_AR,
  name: "",
  count: 1,
  status: InstanceStatus.GOOD,
};

const CreateResourceInstancesForm = ({
  open,
  setOpen,
  resourceId,
  showHeader = true,
}: CreateResourceInstanceFormProps) => {
  const dispatch = useAppDispatch();

  const { formValues, handleInputChange, handleSelectChange, resetForm } =
    useForm<ResourceInstancesCreate>({
      ...initialFormValues,
    });

  const { lang, name, status, count } = formValues;

  const toggleShowForm = () => {
    if (setOpen) setOpen(!open);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    return resourceInstanceCreateSchema
      .validate(formValues, { abortEarly: false })
      .then((resource) => {
        dispatch(createResourceInstancesMiddleware(resourceId, resource)).then(
          (resource) => {
            if (!resource) return;
            resetForm({ ...initialFormValues });
            if (setOpen) setOpen(false);
          }
        );
      })
      .catch((errors: Yup.ValidationError) => {
        errors.inner.forEach((error) => {
          dispatch(
            setGlobalAlert({
              message: error.message,
              timeout: 5000,
              severity: SeverityLevel.ERROR,
            })
          );
        });
      });
  };

  return (
    <Fragment>
      <div className="items-center  justify-center" id="add-user-modal">
        <div className="relative w-full h-full md:h-auto">
          <div className="relative bg-white dark:bg-gray-800">
            {showHeader && (
              <div className="flex items-start bg-gray-900 justify-between p-5 dark:border-gray-700">
                <h3 className="text-xl font-semibold dark:text-white">
                  Add Resource Instances
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={toggleShowForm}
                >
                  {open ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="white"
                        fill-rule="evenodd"
                        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="white"
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                  )}
                </button>
              </div>
            )}

            {open && (
              <div className="p-6 space-y-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-12 my-4 gap-6">
                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="first-name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={handleInputChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Bonnie"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="last-name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Langugage
                      </label>
                      <select
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        name="lang"
                        value={lang}
                        onChange={handleSelectChange}
                      >
                        {Object.values(InstanceLang)
                          .filter((type) => type !== InstanceLang.LANG_OTHER)
                          .map((type) => (
                            <option key={type} value={type}>
                              {type.split("_")[1]}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 my-4 gap-6">
                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="last-name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Status
                      </label>
                      <select
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        name="status"
                        value={status}
                        onChange={handleSelectChange}
                      >
                        {Object.values(InstanceStatus).map((type) => (
                          <option key={type} value={type}>
                            {type.replaceAll("_", " ")}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="first-name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        count
                      </label>
                      <input
                        type="number"
                        name="count"
                        id="count"
                        value={count}
                        onChange={handleInputChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Bonnie"
                      />
                    </div>
                  </div>

                  <div className="items-center flex justify-center space-x-3 py-5 border-gray-200 rounded-b dark:border-gray-700">
                    <button
                      className="text-white bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      type="submit"
                    >
                      Confirm
                    </button>
                    <button
                      className="text-white bg-red-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      type="submit"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateResourceInstancesForm;
