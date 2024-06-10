import {
  SeverityLevel,
  finishGlobalLoading,
  setGlobalAlert,
  startGlobalLoading,
} from "@/config/redux/reducers/user-interface.reducer";
import { InstanceLang, InstanceStatus } from "@/interfaces/instance/Instance";
import { Action, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

export interface ResourceStatsByStatus {
  status: InstanceStatus;
  count: number;
}

export interface ResourceStatsByLang {
  lang: InstanceLang;
  count: number;
}

export interface ResourceStatsByTestimonial {
  rating: number;
  count: number;
}

export const fetchResourceStatsByStatusMiddleware = (resourceId: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(startGlobalLoading({ message: "Fetching resource stats..." }));
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    return axios
      .get<ResourceStatsByStatus[]>(
        `${location.protocol}//${location.host}/api/resources/${resourceId}/stats/by-status`,
        { headers }
      )
      .then(({ data }) => data)
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Resource stats could not be fetched. ⛔",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        return null;
      })
      .finally(() => {
        dispatch(finishGlobalLoading());
      });
  };
};

export const fetchResourceStatsByLangMiddleware = (resourceId: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(startGlobalLoading({ message: "Fetching resource stats..." }));
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    return axios
      .get<ResourceStatsByLang[]>(
        `${location.protocol}//${location.host}/api/resources/${resourceId}/stats/by-lang`,
        { headers }
      )
      .then(({ data }) => data)
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Resource stats could not be fetched. ⛔",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        return null;
      })
      .finally(() => {
        dispatch(finishGlobalLoading());
      });
  };
};

export const fetchResourceStatsByTestimonialsMiddleware = (
  resourceId: string
) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(startGlobalLoading({ message: "Fetching resource stats..." }));
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    return axios
      .get<ResourceStatsByTestimonial[]>(
        `${location.protocol}//${location.host}/api/resources/${resourceId}/stats/by-testimonials`,
        { headers }
      )
      .then(({ data }) => data)
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Resource stats could not be fetched. ⛔",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        return null;
      })
      .finally(() => {
        dispatch(finishGlobalLoading());
      });
  };
};
