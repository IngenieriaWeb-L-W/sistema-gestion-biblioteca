"use client";

import { useAppDispatch } from "@/config/redux/store.config";
import { LoanTestimonial } from "@/interfaces/loan/Testimonial";
import { fetchTestimonialsMiddleware } from "@/middleware/testimonials.middleware";
import { useEffect, useState } from "react";

export type TestimonialsSort = "DATE" | "SCORE";

export interface TestimonialsFilter {
  page: number;
  size: number;
  sortBy: TestimonialsSort;
}

export interface TestimonialsResponse {
  records: LoanTestimonial[];
  total: number;
}

export const useTestimonials = (props: TestimonialsFilter) => {
  const { page, size, sortBy } = props;

  const dispatch = useAppDispatch();
  const [testimonials, setTestimonials] = useState<TestimonialsResponse>({
    records: [],
    total: 0,
  });
  const { records, total } = testimonials;

  useEffect(() => {
    dispatch(fetchTestimonialsMiddleware(page, size, sortBy)).then(
      (response) => {
        setTestimonials({ records: response.records, total: response.total });
      }
    );
  }, [page, size, sortBy, dispatch]);

  return { records, total };
};
