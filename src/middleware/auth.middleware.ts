import { Action, Dispatch } from "@reduxjs/toolkit";

import {
  SeverityLevel,
  finishGlobalLoading,
  setGlobalAlert,
  startGlobalLoading,
} from "@/config/redux/reducers/user-interface.reducer";
import axios from "axios";

export const logInUserMiddleware = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(startGlobalLoading({ message: "Checking authentication..." }));
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return axios
      .get<LoginCredentials>(`http://localhost:3000/api/loans/transactions`, {
        params: { ...filters, ...pagination },
        headers,
      })
      .then(({ data }) => data)
      .then(({ users }) => users)
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Authentication failed, try again...⛔",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        return 0;
      })
      .finally(() => {
        dispatch(finishGlobalLoading());
      });
  };
};
