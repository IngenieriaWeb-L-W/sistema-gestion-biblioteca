import { ResourceDetail } from "@/interfaces/resource/Detail";
import React, { Fragment } from "react";

type BookDetailProps = {
  detail: ResourceDetail;
};

export const BookDetail = ({ detail }: BookDetailProps) => {
  return (
    <Fragment>
      <div className="px-10 bg-gray-800 text-white">
        <h3 className="text-center py-10 text-3xl">Resource description</h3>

        {detail.paragraphs.map((paragraph, index) => (
          <p className=" text-justify py-1" key={index}>
            {paragraph}
          </p>
        ))}
      </div>
    </Fragment>
  );
};
