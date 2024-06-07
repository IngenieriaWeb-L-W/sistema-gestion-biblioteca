import { addResourceCategory } from "@/config/redux/reducers/resource-categories.reducer";
import {
  SeverityLevel,
  finishGlobalLoading,
  setGlobalAlert,
  startGlobalLoading,
} from "@/config/redux/reducers/user-interface.reducer";
import { Category, CategoryCreate } from "@/interfaces/resource/Category";
import { Action, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

interface Pagination {
  page: number;
  size: number;
}

export const createCategoryMiddleware = (category: CategoryCreate) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(startGlobalLoading({ message: "Creating category..." }));
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    };

    return axios
      .post<Category>(
        `${location.protocol}//${location.host}/api/categories`,
        { ...category },
        { headers }
      )
      .then(({ data }) => {
        dispatch(addResourceCategory(data));
      })
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Category could not be created. ⛔",
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

export const fetchCategoriesMiddleware = (pagination: Pagination) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(startGlobalLoading({ message: "Fetching categories..." }));
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    return axios
      .get<{ records: Category[]; total: number }>(
        `${location.protocol}//${location.host}/api/categories`,
        { headers, params: pagination }
      )
      .then(({ data }) => data)
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Categories could not be fetched. ⛔",
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

export const removeCategoryMiddleware = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(startGlobalLoading({ message: "Deleting category..." }));
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    return axios
      .delete<void>(
        `${location.protocol}//${location.host}/api/categories/${id}`,
        { headers }
      )
      .then(({ data }) => data)
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Category could not be deleted. ⛔",
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
