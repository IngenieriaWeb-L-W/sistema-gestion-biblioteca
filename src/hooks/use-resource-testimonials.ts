"use client";

import { useAppDispatch } from "@/config/redux/store.config";
import { LoanTestimonial } from "@/interfaces/loan/Testimonial";
import { fetchResourceTestimonialsMiddleware } from "@/middleware/testimonials.middleware";
import { useEffect, useState } from "react";
import { TestimonialsFilter } from "./use-testimonials";

export interface TestimonialsResponse {
  records: LoanTestimonial[];
  total: number;
}

type UseResourceTestimonials = {
  resourceId: string;
  filters: TestimonialsFilter;
};

export const useResourceTestimonials = ({
  resourceId,
  filters,
}: UseResourceTestimonials) => {
  const dispatch = useAppDispatch();
  const [testimonials, setTestimonials] = useState<TestimonialsResponse>({
    total: 0,
    records: [],
  });

  const { records, total } = testimonials;

  useEffect(() => {
    dispatch(fetchResourceTestimonialsMiddleware(resourceId, filters)).then(
      (response) => {
        if (!response) return;
        setTestimonials(response);
      }
    );
  }, [resourceId, dispatch, filters]);

  return { records, total };
};
