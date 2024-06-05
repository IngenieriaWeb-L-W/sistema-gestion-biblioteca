"use client";

import { useAppDispatch } from "@/config/redux/store.config";
import { useForm } from "@/hooks/use-form";
import { Publisher } from "@/interfaces/resource/Publisher";
import { createPublisherMiddleware } from "@/middleware/publishers.middleware";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";

export type CreatePublisherFormProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmitCallback: () => void;
};

const initialFormValues: Publisher = {
  imageUrl: "",
  name: "",
  url: "",
  resources: [],
};

const CreatePublisherForm = ({ open, setOpen }: CreatePublisherFormProps) => {
  const dispatch = useAppDispatch();
  const [imageSrc, setImageSrc] = useState("");

  const { formValues, handleInputChange, resetForm } = useForm<Publisher>({
    ...initialFormValues,
  });

  const { imageUrl, url, name } = formValues;

  const toggleShowForm = () => {
    setOpen(!open);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(createPublisherMiddleware({ ...formValues })).then((publisher) => {
      if (publisher) {
        resetForm({ ...initialFormValues });
        setOpen(false);
      }
    });
    setOpen(false);
  };

  useEffect(() => {
    setImageSrc(URL.createObjectURL(image));
  }, [image]);

  return (
    <Fragment>
      <div className="items-center  justify-center" id="add-user-modal">
        <div className="relative w-full h-full md:h-auto">
          <div className="relative bg-white dark:bg-gray-800">
            <div className="flex items-start bg-gray-900 justify-between p-5 dark:border-gray-700">
              <h3 className="text-xl font-semibold dark:text-white">
                Add Publisher
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

            {open && (
              <div className="p-6 space-y-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
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
                        required
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Url
                      </label>
                      <input
                        type="text"
                        name="url"
                        id="url"
                        value={url}
                        onChange={handleInputChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Green"
                        required
                      />
                    </div>

                    <div className="col-span-12 sm:col-span-6">
                      <label
                        htmlFor="last-name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Image
                      </label>
                      <Image
                        src={imageSrc}
                        width={200}
                        height={200}
                        alt="Publisher image"
                      />
                    </div>
                  </div>

                  <div className="items-center space-x-3 py-5 border-gray-200 rounded-b dark:border-gray-700">
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

export default CreatePublisherForm;
