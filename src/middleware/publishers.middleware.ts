import {
  SeverityLevel,
  finishGlobalLoading,
  setGlobalAlert,
  startGlobalLoading,
} from "@/config/redux/reducers/user-interface.reducer";
import { Publisher, PublisherCreate } from "@/interfaces/resource/Publisher";
import { Action, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

interface Pagination {
  page: number;
  size: number;
}

export const createPublisherMiddleware = (
  publisher: PublisherCreate,
  imageUrl: string
) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(startGlobalLoading({ message: "Creating publisher..." }));
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    };
    const formData = new FormData();
    formData.append("imageUrl", imageUrl);
    formData.append("name", publisher.name);
    formData.append("url", publisher.url);

    return axios
      .post<Publisher>(
        `${location.protocol}//${location.host}/api/publishers`,
        formData,
        { headers }
      )
      .then(({ data }) => data)
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Publisher could not be created. ⛔",
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

export const fetchPublishersMiddleware = (pagination: Pagination) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(startGlobalLoading({ message: "Fetching publishers..." }));
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    return axios
      .get<{ records: Publisher[]; total: number }>(
        `${location.protocol}//${location.host}/api/publishers`,
        { headers, params: pagination }
      )
      .then(({ data }) => data)
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Publishers could not be fetched. ⛔",
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

export const removePublisherMiddleware = (id: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(startGlobalLoading({ message: "Deleting publisher..." }));
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    return axios
      .delete<void>(
        `${location.protocol}//${location.host}/api/publishers/${id}`,
        { headers }
      )
      .then(({ data }) => data)
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Publisher could not be deleted. ⛔",
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
