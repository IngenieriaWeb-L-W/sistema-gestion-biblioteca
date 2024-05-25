import React from "react";
import Image from "next/image";
import Link from "next/link";

export const BookCard = () => {
  return (
    <React.Fragment>
      <Link className="block" href="/test">
        <div className="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
          <Image
            className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
            src="/images/logos/logo.png"
            alt="Image Description"
            width={10}
            height={10}
          />
        </div>

        <div className="pt-4">
          <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
            eYoga
          </h3>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            A revamped and dynamic approach to yoga analytics
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
              Discovery
            </span>
            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
              Brand Guidelines
            </span>
            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
              Yoga
            </span>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
};
