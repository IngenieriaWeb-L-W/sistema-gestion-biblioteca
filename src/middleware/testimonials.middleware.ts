import {
  SeverityLevel,
  finishGlobalLoading,
  setGlobalAlert,
  startGlobalLoading,
} from "@/config/redux/reducers/user-interface.reducer";
import {
  TestimonialsFilter,
  TestimonialsResponse,
  TestimonialsSort,
} from "@/hooks/use-testimonials";
import { LoanTestimonial } from "@/interfaces/loan/Testimonial";
import { Action, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTestimonialsMiddleware = (
  page: number,
  size: number,
  sortBy: TestimonialsSort
) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(startGlobalLoading({ message: "Fetching testimonials..." }));

    return axios
      .get<TestimonialsResponse>(
        `${location.protocol}//${location.host}/api/testimonials`,
        {
          params: {
            page,
            size,
            sortBy,
          },
        }
      )
      .then(({ data }) => data)
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Testimonials could not be fetched ⛔",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        return {
          records: [] as LoanTestimonial[],
          total: 0,
        } as TestimonialsResponse;
      })
      .finally(() => {
        dispatch(finishGlobalLoading());
      });
  };
};

export const fetchResourceTestimonialsMiddleware = (
  resourceId: string,
  filter: TestimonialsFilter
) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(startGlobalLoading({ message: "Fetching testimonials..." }));
    const { page, size, sortBy } = filter;
    return axios
      .get<TestimonialsResponse>(
        `${location.protocol}//${location.host}/api/resources/${resourceId}/testimonials`,
        {
          params: {
            page,
            size,
            sortBy,
          },
        }
      )
      .then(({ data }) => data)
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Testimonials could not be fetched ⛔",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        return {
          records: [] as LoanTestimonial[],
          total: 0,
        } as TestimonialsResponse;
      })
      .finally(() => {
        dispatch(finishGlobalLoading());
      });
  };
};
