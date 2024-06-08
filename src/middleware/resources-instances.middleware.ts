import { Action, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

import {
  ResourceInstancesFilter,
  ResourceInstancesResponse,
  Pagination,
} from "@/config/redux/reducers/resource-instances.reducer";
import {
  SeverityLevel,
  finishGlobalLoading,
  setGlobalAlert,
  startGlobalLoading,
} from "@/config/redux/reducers/user-interface.reducer";

export const fetchResourceInstancesMiddleware = (
  id: string,
  instancesFilter: ResourceInstancesFilter,
  pagination: Pagination
) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(startGlobalLoading({ message: "Fetching resources..." }));
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    return axios
      .get<ResourceInstancesResponse>(
        `${location.protocol}//${location.host}/api/resources/${id}/instances`,
        { headers, params: { ...instancesFilter, ...pagination } }
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

export const removeResourceInstanceMiddleware = (instanceId: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(startGlobalLoading({ message: "Deleting resource instance..." }));
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    return axios
      .delete<void>(
        `${location.protocol}//${location.host}/api/resources/instances/${instanceId}`,
        { headers }
      )
      .then(({ data }) => data)
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Resource instance could not be deleted. ⛔",
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
