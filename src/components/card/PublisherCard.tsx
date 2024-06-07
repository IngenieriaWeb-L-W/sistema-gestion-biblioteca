import React, { Fragment } from "react";

import Image from "next/image";

import { useAppDispatch } from "@/config/redux/store.config";
import { Publisher } from "@/interfaces/resource/Publisher";
import { removePublisherMiddleware } from "@/middleware/publishers.middleware";

type PublisherCardProps = {
  publisher: Publisher;
  onDeleteCallback: (id: number) => void;
};

export const PublisherCard = ({
  publisher,
  onDeleteCallback,
}: PublisherCardProps) => {
  const dispatch = useAppDispatch();

  const handleDeletePublisher = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(removePublisherMiddleware(publisher.id!)).then(() => {
      onDeleteCallback(publisher.id!);
    });
  };

  return (
    <Fragment>
      <div className="block relative">
        <button
          type="button"
          onClick={handleDeletePublisher}
          className="absolute top-2 right-2 rounded-lg px-3 py-2 bg-red-500 hover:bg-red-800"
        >
          Delete
        </button>

        <div className="h-[200px] bg-slate-950 rounded-tl-md rounded-tr-md">
          <Image
            className="object-contain w-full h-full rounded-ss-lg rounded-se-lg"
            src={publisher.imageUrl}
            alt={publisher.name}
            width={500}
            height={500}
          />
        </div>

        <div className="px-3 py-2 text-xs bg-gray-900 rounded-ee-sm rounded-es-sm shadow-2xl">
          <h3 className="h-3 text-sm text-justify inline-block font-normal text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
            {publisher.name}
          </h3>

          <div className="mt-1 grid grid-cols-12 items-end gap-2 text-white">
            <span className="col-span-8 text-start">{publisher.url}</span>
            <div className="col-span-4 w-full text-end">
              <h2 className="text-2xl">{publisher.resources?.length}</h2>
              <p>Resources</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
