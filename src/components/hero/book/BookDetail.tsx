"use client";

import { Fragment, useState } from "react";

import Image from "next/image";

import { Resource } from "@/interfaces/resource/Resource";
import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";
import { ResourceInstanceLangs } from "@/interfaces/instance/ResourceInstanceLang";
import { useCart } from "@/hooks/use-cart";
import { InstanceLang } from "@/interfaces/instance/Instance";

type BookDetailHeroProps = {
  resource: Resource;
};

export const BookDetailHero = ({ resource }: BookDetailHeroProps) => {
  const { email, login } = useAuth();
  const [borrowingResource, setBorrowingResource] = useState(false);
  const { detail } = resource;
  const { addItemToCart, removeItemFromCart, isItemOnCart, showCart } =
    useCart();

  const handleBorrowResource = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    if (borrowingResource) {
      setBorrowingResource(false);
      return;
    }
    if (!email) {
      login("google", true, `/dashboard/resources/${resource.slug}`);
    }
    setBorrowingResource(true);
  };

  if (!detail) return <></>;

  const handleConfirm = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    addItemToCart(resource, InstanceLang.LANG_EN);
    showCart();
    setBorrowingResource(false);
  };

  const handleRemoveResourceFromCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    removeItemFromCart(resource);
  };

  return (
    <Fragment>
      <div className="mx-auto bg-gray-900 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-7">
            <h1 className="block text-3xl font-bold text-gray-200 sm:text-4xl md:text-5xl lg:text-6xl ">
              {resource.name}
            </h1>
            <span className="text-white mt-4 text-2xl">{resource.edition}</span>
            <p className="mt-3 text-lg text-justify text-gray-800 dark:text-neutral-400">
              {resource.shortDescription}
            </p>

            <hr className="mt-5" />
            <div className="flex flex-row justify-between">
              <p className="mt-3 text-lg items-end gap-x-2 flex text-white">
                {detail.author.split(",").length > 1 ? "Authors" : "Author"}:{" "}
                <span className="text-3xl">{detail.author}</span>
              </p>
              <div className="flex flex-col relative gap-y-3">
                {!isItemOnCart(resource) ? (
                  <button
                    onClick={handleBorrowResource}
                    type="button"
                    className="px-5 rounded-sm mt-3 py-2 bg-blue-500 text-white"
                  >
                    {borrowingResource ? "Cancel loan" : "Borrow Now!"}
                  </button>
                ) : (
                  <button
                    onClick={handleRemoveResourceFromCart}
                    type="button"
                    className="px-5 rounded-sm mt-3 py-2 bg-red-500 text-white"
                  >
                    Remove Item from Cart
                  </button>
                )}

                {borrowingResource && (
                  <div className="absolute top-16 w-full">
                    <select
                      name="status"
                      id="users-status"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      {Object.keys(ResourceInstanceLangs)
                        .filter(
                          (lang) => lang !== ResourceInstanceLangs.LANG_OTHER
                        )
                        .map((lang) => (
                          <option key={lang} value={lang}>
                            {lang.replace("LANG_", "").trim()}
                          </option>
                        ))}
                    </select>

                    <button
                      onClick={handleConfirm}
                      type="button"
                      className="px-5 w-full rounded-sm mt-3 py-2 bg-green-800 text-white"
                    >
                      Confirm
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-5 text-white flex items-center flex-wrap gap-2">
              {resource.categories.length > 1 ? "Categories" : "Category"}:{" "}
              {resource.categories.map((category) => (
                <span
                  key={category.id}
                  className="py-1.5 px-2 bg-white text-gray-600 border border-gray-200 sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
                >
                  {category.name}
                </span>
              ))}
            </div>

            <div className="mt-5">
              <p className="mt-3 text-lg items-end gap-x-2 flex text-white">
                Published by:{" "}
                <span className="text-3xl">
                  <Link
                    target="_blank"
                    className="w-auto"
                    href={resource.publisher.url}
                  >
                    {detail.author}
                  </Link>
                </span>
              </p>

              <div className="mt-2">
                <Image
                  className="rounded-sm"
                  src={resource.publisher.imageUrl}
                  alt="Publisher"
                  width={200}
                  height={100}
                />
              </div>
            </div>

            <div className="mt-6">
              <span className="text-xs mb-2 font-medium text-gray-800 uppercase dark:text-neutral-200">
                Additional info:
              </span>
              <ol>
                <li>
                  <span className="text-white">ISBN: {detail.isbn}</span>
                </li>
                <li>
                  <span className="text-white">
                    Publication Year: {detail.publicationYear}
                  </span>
                </li>
              </ol>
            </div>
          </div>

          <div className="lg:col-span-5 flex h-screen my-auto justify-end items-center  mt-10 lg:mt-0">
            <Image
              className="w-auto h-[90vh] rounded-xl"
              src="/images/books/test-book-img.jpg"
              alt="Image Description"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
