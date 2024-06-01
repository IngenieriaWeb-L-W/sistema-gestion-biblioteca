"use client";
import TestimonialCard from "@/components/card/TestimonialCard";
import { TestimonialsFilter, useTestimonials } from "@/hooks/use-testimonials";
import { Fragment, useState } from "react";

const TestimonialsPage = () => {
  const [testimonialsFilter, setTestimonialsFilter] =
    useState<TestimonialsFilter>({
      page: 0,
      size: 30,
      sortBy: "DATE",
    });

  const { page, size, sortBy } = testimonialsFilter;
  const { records, total } = useTestimonials({ page, size, sortBy });

  // const getRandomText = (minLength: number, maxLength: number): string => {
  //   const characters =
  //     "A BCDE FGH IJKL MN OPQ RS T UVW X YZa bcdefg hij klmn o pqr stu vwx yz0 23 456 789";
  //   const charactersLength = characters.length;

  //   // Ensure minLength is not greater than maxLength
  //   if (minLength > maxLength) {
  //     throw new Error("minLength cannot be greater than maxLength");
  //   }

  //   // Generate a random length between minLength and maxLength
  //   const randomLength =
  //     Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

  //   // Generate the random string
  //   let result = "";
  //   for (let i = 0; i < randomLength; i++) {
  //     const randomIndex = Math.floor(Math.random() * charactersLength);
  //     result += characters[randomIndex];
  //   }

  //   return result;
  // };

  return (
    <section>
      <div className="py-20">
        <div className="mx-auto px-6 max-w-6xl text-gray-500">
          <div className="text-center">
            <h2 className="text-3xl text-gray-950 dark:text-white font-semibold">
              Loved by the Community
            </h2>
            <p className="mt-6 mb-2 text-gray-700 dark:text-gray-300">
              Bookhub has transformed the way the users borrow resources!
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="space-y-3">
              {records.map((testimonial, index) => (
                <Fragment key={testimonial.id}>
                  {index % 3 === 0 && (
                    <TestimonialCard testimonial={testimonial} />
                  )}
                </Fragment>
              ))}
            </div>

            <div className="space-y-3">
              {records.map((testimonial, index) => (
                <Fragment key={testimonial.id}>
                  {index % 3 === 1 && (
                    <TestimonialCard testimonial={testimonial} />
                  )}
                </Fragment>
              ))}
            </div>

            <div className="space-y-3">
              {records.map((testimonial, index) => (
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

export default TestimonialsPage;
