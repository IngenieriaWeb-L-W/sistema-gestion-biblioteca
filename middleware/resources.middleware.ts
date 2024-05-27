import {
  Pagination,
  ResourceFilters,
  setResources,
} from "@/config/redux/reducers/resources.reducer";
import {
  SeverityLevel,
  setGlobalAlert,
} from "@/config/redux/reducers/user-interface.reducer";
import { booksData } from "@/data/books/book-list";
import { Resource } from "@/interfaces/resource/Resource";
import { Action, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

export interface ResourcesResponse {
  records: Resource[];
  total: number;
}

export const fetchResourcesMiddleware = (
  filters: ResourceFilters,
  pagination: Pagination
) => {
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
      });
  };
};
