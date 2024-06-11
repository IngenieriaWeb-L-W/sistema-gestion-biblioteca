import { LoanTestimonial } from "@/interfaces/loan/Testimonial";
import Image from "next/image";
import StarRating from "../rating/StarRating";

type TestimonialCardProps = {
  testimonial: LoanTestimonial;
};

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="p-2 rounded-md border border-gray-700 bg-transparent">
      <div className="flex gap-3">
        <span className="relative block rounded-[--avatar-border-radius] text-lg size-14">
          <Image
            className="h-full w-full rounded-sm object-cover"
            src={testimonial.user.imageUrl || "/images/avatar.png"}
            alt="John Doe"
            width="120"
            height="120"
          />
        </span>

        <div className="w-[calc(100%-3.25rem)]">
          <h3 className="font-medium text-gray-950 dark:text-white">
            {testimonial.user.firstName}
          </h3>
          <span className="block text-sm tracking-wide text-gray-600 dark:text-gray-400">
            <StarRating rating={testimonial.rating} />
          </span>
          <blockquote className="mt-3">
            <h6 className="text-justify text-white">{testimonial.title}</h6>
            <div className="py-2 opacity-20">
              <hr />
            </div>
          </blockquote>
          <small className="text-white">{testimonial.testimonial}</small>
        </div>
      </div>
    </div>
  );
};
