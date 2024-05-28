import { Action, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

import {
  ResourceCategoryFilters,
  setResourceCategories,
} from "@/config/redux/reducers/resource-categories.reducer";
import {
  Pagination,
  addResource,
  setResourceDetail,
  setResources,
} from "@/config/redux/reducers/resources.reducer";
import {
  SeverityLevel,
  finishGlobalLoading,
  setGlobalAlert,
  startGlobalLoading,
} from "@/config/redux/reducers/user-interface.reducer";
import { booksData } from "@/data/books/book-list";
import { ResourceCategory } from "@/interfaces/resource/Category";
import { ResourceDetail } from "@/interfaces/resource/Detail";
import { Resource } from "@/interfaces/resource/Resource";

export interface ResourcesResponse {
  records: Resource[];
  total: number;
}

// filters: ResourceFilters,
// pagination: Pagination
export const fetchResourcesMiddleware = () => {
  return async (dispatch: Dispatch<Action>) => {
    // return (
    //   axios
    //     // TODO: Usar variable de entorno
    //     .get<ResourcesResponse>(`http://localhost:3000/api`, {
    //       params: {
    //         ...filters,
    //         ...pagination,
    //       },
    //     })
    //     .then(({ data }) => data)
    dispatch(startGlobalLoading({ message: "Fetching resources..." }));
    return Promise.resolve({ records: booksData, total: booksData.length })
      .then(({ records, total }) => {
        dispatch(setResources({ records, total }));
      })
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Resources could not be fetched ⛔",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
      })
      .finally(() => {
        dispatch(finishGlobalLoading());
      });
  };
};

export const fetchFullResourceMiddleware = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(
      startGlobalLoading({ message: "Fetching resource information..." })
    );
    return axios
      .get<Resource>(`http://localhost:3000/api/resources/${id}`)
      .then(({ data }) => data)
      .then((resource) => {
        dispatch(addResource(resource));
      })
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Resource could not be fetched ⛔",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
      })
      .finally(() => {
        dispatch(finishGlobalLoading());
      });
  };
};

export const fetchResourceDetailMiddleware = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(startGlobalLoading({ message: "Fetching resource detail..." }));
    return axios
      .get<ResourceDetail>(`http://localhost:3000/api/resources/${id}/detail`)
      .then(({ data }) => data)
      .then((detail) => {
        dispatch(setResourceDetail({ id, detail }));
      })
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Resource detail could not be fetched ⛔",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
      })
      .finally(() => {
        dispatch(finishGlobalLoading());
      });
  };
};

export const fetchResourceCategoriesMiddleware = (
  filters: ResourceCategoryFilters,
  pagination: Pagination
) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(
      startGlobalLoading({ message: "Fetching resource categories..." })
    );
    return axios
      .get<{ total: number; records: ResourceCategory[] }>(
        `http://localhost:3000/api/resources/categories`,
        {
          params: { ...filters, ...pagination },
        }
      )
      .then(({ data }) => data)
      .then(({ records, total }) => {
        dispatch(setResourceCategories({ records, total }));
      })
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Resource categories could not be fetched ⛔",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
      })
      .finally(() => {
        dispatch(finishGlobalLoading());
      });
  };
};
