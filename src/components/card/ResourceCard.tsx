import React, { Fragment } from "react";

import Image from "next/image";
import Link from "next/link";

import { Resource } from "@/interfaces/resource/Resource";
import { wordToHexColor } from "@/common/utils/color-generator";
import { useAvailableInstances } from "@/hooks/use-available-instances";

type BookCardProps = {
  resource: Resource;
  typeRibbon?: boolean;
};

export const ResourceCard = ({ resource, typeRibbon }: BookCardProps) => {
  const { availableInstances } = useAvailableInstances({
    resourceId: resource.id,
  });

  return (
    <Fragment>
      <Link className="block relative" href={`resources/${resource.slug}`}>
        <div>
          <Image
            className="object-cover w-full h-full rounded-ss-lg rounded-se-lg"
            src={
              resource.imageUrl || "/images/default/default-resource-img.png"
            }
            alt={resource.shortDescription}
            width={200}
            height={500}
          />
        </div>
        <div
          title={resource.shortDescription}
          className="px-3 py-2 text-xs bg-gray-900 rounded-ee-sm rounded-es-sm shadow-2xl"
        >
          <h3 className="h-3 text-sm text-justify inline-block font-normal text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
            {resource.name}
          </h3>

          {typeRibbon && (
            <span
              className={`text-white absolute right-1 top-1 opacity-[0.8]  px-3 py-2 rounded-lg`}
              style={{ backgroundColor: `${wordToHexColor(resource.type)}` }}
            >
              {resource.type}
            </span>
          )}

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

          <div className="mt-1 grid grid-cols-12 items-end gap-2 text-white">
            <span className="col-span-8 text-start">{resource.edition}</span>
            {availableInstances === -1 ? (
              <div className="col-span-4 w-full text-end">
                <h2 className="text-2xl">Loading</h2>
                <p>Available items</p>
              </div>
            ) : (
              <div className="col-span-4 w-full text-end">
                <h2 className="text-2xl">{availableInstances}</h2>
                <p>Available</p>
              </div>
            )}
          </div>
        </div>
      </Link>
    </Fragment>
  );
};
