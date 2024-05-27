import React, { Fragment } from "react";

import Image from "next/image";
import Link from "next/link";

import { Resource } from "@/interfaces/resource/Resource";

type BookCardProps = {
  resource: Resource;
};

export const ResourceCard: React.FC<BookCardProps> = ({ resource }) => {
  return (
    <Fragment>
      <Link className="block" href="/test">
        <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
          <Image
            className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
            src={resource.imageUrl}
            alt={resource.shortDescription}
            width={10}
            height={10}
          />
        </div>

        <div className="pt-4">
          <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
            {resource.name}
          </h3>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            {resource.shortDescription}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {resource.categories.map((category) => (
              <span
                key={category.id}
                className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
              >
                {category.name}
              </span>
            ))}
          </div>

          <Link href={`books/${resource.id}`}>Ver detalle</Link>
        </div>
      </Link>
    </Fragment>
  );
};
