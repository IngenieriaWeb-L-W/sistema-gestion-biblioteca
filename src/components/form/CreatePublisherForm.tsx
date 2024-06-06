"use client";

import publisherCreateSchema from "@/common/schemas/Publisher.schema";
import {
  SeverityLevel,
  setGlobalAlert,
} from "@/config/redux/reducers/user-interface.reducer";
import { useAppDispatch } from "@/config/redux/store.config";
import { useForm } from "@/hooks/use-form";
import { Publisher, PublisherCreate } from "@/interfaces/resource/Publisher";
import { createPublisherMiddleware } from "@/middleware/publishers.middleware";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import * as Yup from "yup";

export type CreatePublisherFormProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmitCallback: (publisher: Publisher) => void;
};

const initialFormValues: PublisherCreate = {
  image: null,
  name: "",
  url: "",
};

const CreatePublisherForm = ({
  open,
  setOpen,
  onSubmitCallback,
}: CreatePublisherFormProps) => {
  const dispatch = useAppDispatch();
  const [imageSrc, setImageSrc] = useState("");

  const { formValues, handleInputChange, resetForm } = useForm<PublisherCreate>(
    { ...initialFormValues }
  );

  const { image, url, name } = formValues;

  const toggleShowForm = () => {
    setOpen(!open);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    return publisherCreateSchema
      .validate(formValues, { abortEarly: false })
      .then((publisher) => {
        const reader = new FileReader();
        reader.readAsDataURL(image!);
        reader.onload = () => {
          const imageUrl = reader.result as string;
          dispatch(createPublisherMiddleware(publisher, imageUrl)).then(
            (publisher) => {
              if (!publisher) return;
              resetForm({ ...initialFormValues });
              onSubmitCallback(publisher);
              setOpen(false);
            }
          );
        };
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

  useEffect(() => {
    if (!image) return;
    if (image.size > 0) {
      setImageSrc(URL.createObjectURL(image));
    }
  }, [image]);

  const handleToggleSelectFile = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    const fileInput = document.getElementById("imageFile");
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    const file = event.target.files[0];
    handleInputChange({
      target: {
        name: "image",
        value: file,
      },
    });
  };

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
                      />
                    </div>

                    <div className="col-span-12 sm:col-span-6">
                      <label htmlFor="imageFile">
                        <button
                          type="button"
                          className="bg-blue-500 flex items-center gap-x-2 px-3 py-2 rounded-md hover:bg-blue-600 text-white font-medium text-sm dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:focus:ring-4 dark:focus:ring-primary-300 dark:text-white"
                          onClick={handleToggleSelectFile}
                        >
                          <Image
                            src="/icons/upload.svg"
                            width={20}
                            height={20}
                            alt="Upload image"
                          />
                          {imageSrc ? "Change Image" : "Upload Image"}
                        </button>
                      </label>
                      <input
                        type="file"
                        onChange={handleFileChange}
                        name=""
                        className="hidden"
                        id="imageFile"
                      />
                    </div>

                    <div className="col-span-12 sm:col-span-6">
                      {imageSrc && (
                        <Image
                          src={imageSrc}
                          width={200}
                          height={200}
                          alt="Publisher image"
                        />
                      )}
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
