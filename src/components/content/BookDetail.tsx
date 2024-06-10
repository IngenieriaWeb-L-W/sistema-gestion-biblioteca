import { useResourceTestimonials } from "@/hooks/use-resource-testimonials";
import { ResourceDetail } from "@/interfaces/resource/Detail";
import React, { Fragment } from "react";
import ResourceTestimonials from "./ResourceTestimonials";

type BookDetailProps = {
  resourceId: string;
  detail: ResourceDetail;
};

export const BookDetail = ({ detail, resourceId }: BookDetailProps) => {
  return (
    <Fragment>
      <div className="px-10 bg-gray-800 text-white">
        <h3 className="text-center py-10 text-3xl">Resource description</h3>

        {detail.paragraphs.map((paragraph, index) => (
          <p className="text-justify py-1" key={index}>
            {paragraph
              .replaceAll("\n", " ")
              .replaceAll("\r", "")
              .replaceAll('"', "")}
          </p>
        ))}
      </div>
      <ResourceTestimonials resourceId={resourceId} />
    </Fragment>
  );
};
