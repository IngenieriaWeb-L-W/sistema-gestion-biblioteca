import {
  SeverityLevel,
  finishGlobalLoading,
  setGlobalAlert,
  startGlobalLoading,
} from "@/config/redux/reducers/user-interface.reducer";
import { Publisher } from "@/interfaces/resource/Publisher";
import { Action, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

export const createPublisherMiddleware = (publisher: Publisher) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(startGlobalLoading({ message: "Creating publisher..." }));
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return axios
      .post<Publisher>(
        `${location.protocol}//${location.host}/api/publishers`,
        { ...publisher },
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
