import { Fragment } from "react";

import Image from "next/image";

import { Resource } from "@/interfaces/resource/Resource";
import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";

type BookDetailHeroProps = {
  resource: Resource;
};

export const BookDetailHero = ({ resource }: BookDetailHeroProps) => {
  const { email, login } = useAuth();

  const { detail } = resource;

  const handleBorrowResource = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    if (!email) {
      login("google", true, `/dashboard/resources/${resource.slug}`);
    }
  };

  if (!detail) return <></>;

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
              <button
                onClick={handleBorrowResource}
                type="button"
                className="px-5 rounded-sm mt-3 py-2 bg-blue-500 text-white"
              >
                Borrow Now
              </button>
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
