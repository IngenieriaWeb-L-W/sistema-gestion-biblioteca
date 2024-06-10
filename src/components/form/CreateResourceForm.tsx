"use client";

import resourceCreateSchema from "@/common/schemas/Resource.schema";
import {
  SeverityLevel,
  setGlobalAlert,
} from "@/config/redux/reducers/user-interface.reducer";
import { useAppDispatch } from "@/config/redux/store.config";
import { useForm } from "@/hooks/use-form";
import { usePublisher } from "@/hooks/use-publisher";
import { useResourceCategory } from "@/hooks/use-resource-category";
import { ResourceCreate } from "@/interfaces/resource/Resource";
import { ResourceTypes } from "@/interfaces/resource/Type";
import {
  createResourceMiddleware,
  fetchResourceDetailMiddleware,
} from "@/middleware/resources.middleware";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import * as Yup from "yup";

export type CreateResourceFormProps = {
  open: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  showHeader?: boolean;
  editId?: string;
};

const initialFormValues: ResourceCreate = {
  name: "",
  shortDescription: "",
  image: null,
  edition: "",
  categories: [],
  author: "",
  publisher: 1,
  paragraphs: [],
  isbn: "",
  publicationYear: new Date().getFullYear(),
  type: ResourceTypes.BOOK,
};

const CreateResourceForm = ({
  open,
  setOpen,
  showHeader = true,
  editId,
}: CreateResourceFormProps) => {
  const dispatch = useAppDispatch();

  const { records: allCategories } = useResourceCategory();
  const { records: allPublishers } = usePublisher({ page: 0, size: -1 });
  const [imageSrc, setImageSrc] = useState("");
  const { formValues, handleInputChange, handleSelectChange, resetForm } =
    useForm<ResourceCreate>({
      ...initialFormValues,
    });

  const [synopsisParagraphs, setSynopsisParagraphs] = useState<{
    current: string;
    all: string[];
  }>({ all: [], current: "" });

  const {
    name,
    shortDescription,
    image,
    edition,
    type,
    publicationYear,
    publisher,
    isbn,
    author,
  } = formValues;

  const toggleShowForm = () => {
    if (setOpen) setOpen(!open);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleInputChange({
      target: {
        name: "paragraphs",
        value: [...synopsisParagraphs.all],
      },
    });
    return resourceCreateSchema
      .validate(formValues, { abortEarly: false })
      .then((resource) => {
        const reader = new FileReader();
        reader.readAsDataURL(image!);
        reader.onload = () => {
          const imageUrl = reader.result as string;
          dispatch(createResourceMiddleware(resource, imageUrl)).then(
            (resource) => {
              if (!resource) return;
              resetForm({ ...initialFormValues });
              setSynopsisParagraphs({ all: [], current: "" });
              setImageSrc("");
              if (setOpen) setOpen(false);
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

  const handleToggleCategory = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const categoryId = parseInt(event.target.value);
    handleInputChange({
      target: {
        name: "categories",
        value: formValues.categories.includes(categoryId)
          ? formValues.categories.filter((id) => id !== categoryId)
          : [...formValues.categories, categoryId],
      },
    });
  };

  const handleParagraphKeyUp = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ): void => {
    dispatch(
      setGlobalAlert({
        message: event.key,
        severity: SeverityLevel.INFO,
        timeout: 5000,
      })
    );
    if (event.key !== "Enter") return;

    const paragraph = event.currentTarget.value;
    setSynopsisParagraphs({
      all: [...synopsisParagraphs.all, paragraph],
      current: "",
    });
  };

  const handleParagraphChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setSynopsisParagraphs({
      ...synopsisParagraphs,
      current: event.target.value.trim(),
    });
  };

  const handleDeleteParagraph = (index: number): void => {
    setSynopsisParagraphs({
      all: synopsisParagraphs.all.filter((_, i) => i !== index),
      current: synopsisParagraphs.current,
    });
  };

  useEffect(() => {
    if (!image) return;
    if (image.size > 0) {
      setImageSrc(URL.createObjectURL(image));
    }
  }, [image]);

  useEffect(() => {
    if (!editId) return;
    dispatch(fetchResourceDetailMiddleware(editId)).then((resource) => {
      if (!resource) return;
      resetForm({
        name: resource.name,
        shortDescription: resource.shortDescription,
        image: null,
        edition: resource.edition,
        categories: resource.categories.map((category) => category.id),
        author: resource.detail!.author,
        publisher: 1,
        paragraphs: resource.detail?.paragraphs || [],
        isbn: resource.detail?.isbn,
        publicationYear:
          resource.detail?.publicationYear || new Date().getFullYear(),
        type: resource.type,
      });
    });
  }, [dispatch, editId, resetForm]);

  return (
    <Fragment>
      <div className="items-center justify-center" id="add-user-modal">
        <div className="relative w-full h-full md:h-auto">
          <div className="relative bg-white dark:bg-gray-800">
            {showHeader && (
              <div className="flex items-start bg-gray-900 justify-between p-5 dark:border-gray-700">
                <h3 className="text-xl font-semibold dark:text-white">
                  Add Resource
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
              <div className="space-y-6">
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
                        Edition
                      </label>
                      <input
                        type="text"
                        name="edition"
                        id="edition"
                        value={edition}
                        onChange={handleInputChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="1st Edition, 2021"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-12 my-4 gap-6">
                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="last-name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Type
                      </label>
                      <select
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        name="type"
                        value={type}
                        onChange={handleSelectChange}
                      >
                        {Object.values(ResourceTypes)
                          .filter((type) => type !== ResourceTypes.ALL)
                          .map((type) => (
                            <option key={type} value={type}>
                              {type.replaceAll("_", " ")}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="last-name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Categories
                      </label>
                      <section className="max-h-32 flex flex-row justify-between flex-wrap overflow-y-auto">
                        {allCategories.map((category) => (
                          <div key={category.id} className="flex items-center">
                            <input
                              type="checkbox"
                              id={category.id.toString()}
                              name="categories"
                              value={category.id}
                              onChange={handleToggleCategory}
                              checked={formValues.categories.includes(
                                category.id
                              )}
                              className="mr-1"
                            />
                            <label htmlFor={category.id.toString()}>
                              {category.name}
                            </label>
                          </div>
                        ))}
                        {allCategories.length === 0 && (
                          <div className="flex h-full py-2 flex-row gap-x-2">
                            <span>Loading categories</span>
                            <Image
                              src="/images/loading/spin-loading.svg"
                              width={20}
                              height={20}
                              alt="Loading"
                            />
                          </div>
                        )}
                      </section>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 my-4 gap-6">
                    <div className="col-span-12 ">
                      <label
                        htmlFor="last-name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Short Description
                      </label>
                      <textarea
                        name="shortDescription"
                        id="shortDescription"
                        value={shortDescription}
                        onChange={handleInputChange}
                        className="shadow-sm resize-y max-h-52 min-h-20 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Max 300 characters"
                      ></textarea>
                    </div>

                    <div className="col-span-12">
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
                          {imageSrc ? "Change Image" : "Upload Image"} 500x800px
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

                    <div className="col-span-12 mx-auto">
                      {imageSrc && (
                        <Image
                          src={imageSrc}
                          width={500}
                          height={800}
                          alt="Resource image"
                        />
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-12 my-4 gap-6">
                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="first-name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        ISBN
                      </label>
                      <input
                        type="text"
                        name="isbn"
                        id="isbn"
                        value={isbn}
                        onChange={handleInputChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="last-name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Publication Year
                      </label>
                      <input
                        type="number"
                        name="publicationYear"
                        id="publicationYear"
                        value={publicationYear}
                        onChange={handleInputChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-12 my-4 gap-6">
                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="last-name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Publisher
                      </label>
                      <select
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        name="publisher"
                        value={publisher}
                        onChange={handleSelectChange}
                      >
                        {allPublishers
                          .toSorted((a, b) => a.name.localeCompare(b.name))
                          .map((publisher) => (
                            <option key={publisher.id!} value={publisher.id!}>
                              {publisher.name}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="last-name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Author(s) comma separated
                      </label>
                      <input
                        type="text"
                        name="author"
                        id="author"
                        value={author}
                        onChange={handleInputChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-12 my-4 gap-6">
                    <div className="col-span-12 ">
                      <label
                        htmlFor="last-name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Synopsis paragraphs
                      </label>
                      <textarea
                        name="synopsisParagraph"
                        id="synopsisParagraph"
                        value={synopsisParagraphs.current}
                        onChange={handleParagraphChange}
                        onKeyUp={handleParagraphKeyUp}
                        className="shadow-sm resize-y max-h-52 min-h-20 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      ></textarea>
                    </div>

                    {synopsisParagraphs.all.map((paragraph, index) => (
                      <div key={index} className="col-span-12 mb-3">
                        <p className="text-justify">
                          {paragraph.trim().length > 0
                            ? paragraph
                            : "(Line break)"}
                        </p>
                        <div className="flex justify-end">
                          <button
                            type="button"
                            onClick={() => handleDeleteParagraph(index)}
                            className="bg-red-500 px-3 py-2 rounded-md"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
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

export default CreateResourceForm;
