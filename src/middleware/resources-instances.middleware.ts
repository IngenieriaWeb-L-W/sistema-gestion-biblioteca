import { Action, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

import {
  Pagination,
  ResourceInstancesFilter,
  ResourceInstancesResponse,
} from "@/config/redux/reducers/resource-instances.reducer";
import {
  SeverityLevel,
  finishGlobalLoading,
  setGlobalAlert,
  startGlobalLoading,
} from "@/config/redux/reducers/user-interface.reducer";
import {
  InstanceLang,
  InstanceStatus,
  ResourceInstance,
  ResourceInstancesCreate,
} from "@/interfaces/instance/Instance";

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

export const fetchAvailableInstancesMiddleware = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    return axios
      .get<{ available: number }>(
        `${location.protocol}//${location.host}/api/resources/${id}/instances/available`,
        { headers }
      )
      .then(({ data }) => data)
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Available instances could not be fetched. ⛔",
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

export const fetchInstanceAvailableItemsByLang = (instanceId: string) => {
  return async (dispatch: Dispatch<Action>) => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    return axios
      .get<{ lang: InstanceLang; count: number }>(
        `${location.protocol}//${location.host}/api/instances/${instanceId}/available/lang`,
        { headers }
      )
      .then(({ data }) => data)
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Available instances could not be fetched. ⛔",
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

export const changeInstanceStatusMiddleware = (
  resourceId: string,
  instanceId: string,
  status: InstanceStatus
) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(startGlobalLoading({ message: "Deleting resource instance..." }));
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    return axios
      .patch<ResourceInstance>(
        `${location.protocol}//${location.host}/api/resources/${resourceId}/instances/${instanceId}`,
        { status },
        { headers }
      )
      .then(({ data }) => data)
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Resource instance could not be updated. ⛔",
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

export const createResourceInstancesMiddleware = (
  id: string,
  instances: ResourceInstancesCreate
) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(startGlobalLoading({ message: "Creating resource instances..." }));
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    return axios
      .post<{ message: string }>(
        `${location.protocol}//${location.host}/api/resources/${id}/instances`,
        instances,
        { headers }
      )
      .then(({ data }) => data)
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Resource instances could not be created. ⛔",
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
