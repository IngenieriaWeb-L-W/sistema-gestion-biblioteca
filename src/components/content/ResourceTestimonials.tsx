"use client";

import { useResourceTestimonials } from "@/hooks/use-resource-testimonials";
import { TestimonialsFilter } from "@/hooks/use-testimonials";
import { Fragment, useState } from "react";
import { TestimonialCard } from "../card/TestimonialCard";

type ResourceTestimonialsProps = {
  resourceId: string;
};

const ResourceTestimonials = ({ resourceId }: ResourceTestimonialsProps) => {
  const [filters, setFilters] = useState<TestimonialsFilter>({
    page: 1,
    size: 9,
    sortBy: "RATING",
  });
  const { records: testimonials } = useResourceTestimonials({
    resourceId,
    filters,
  });

  return (
    <section>
      <div className="py-20">
        <div className="mx-auto px-6 max-w-6xl text-gray-500">
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="space-y-3">
              {testimonials.map((testimonial, index) => (
                <Fragment key={testimonial.id}>
                  {index % 3 === 0 && (
                    <TestimonialCard testimonial={testimonial} />
                  )}
                </Fragment>
              ))}
            </div>

            <div className="space-y-3">
              {testimonials.map((testimonial, index) => (
                <Fragment key={testimonial.id}>
                  {index % 3 === 1 && (
                    <TestimonialCard testimonial={testimonial} />
                  )}
                </Fragment>
              ))}
            </div>

            <div className="space-y-3">
              {testimonials.map((testimonial, index) => (
                <Fragment key={testimonial.id}>
                  {index % 3 === 2 && (
                    <TestimonialCard testimonial={testimonial} />
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      {records.length > 0 && (
        <div className="flex justify-center">
          <button className="bg-blue-700 p-3 rounded-md">Load more...</button>
        </div>
      )}
    </section>
  );
};

export default ResourceTestimonials;
