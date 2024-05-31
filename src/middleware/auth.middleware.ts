import { Action, Dispatch } from "@reduxjs/toolkit";

import axios from "axios";

import { loginUser } from "@/config/redux/reducers/authentication.reducer";
import {
  SeverityLevel,
  finishGlobalLoading,
  setGlobalAlert,
  startGlobalLoading,
} from "@/config/redux/reducers/user-interface.reducer";
import { AuthCredentials } from "@/interfaces/auth/AuthCredentials";

export const logInUserMiddleware = (idToken: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(startGlobalLoading({ message: "Checking authentication..." }));
    const headers = {
      "Content-Type": "application/json",
    };
    return axios
      .post<{ user: AuthCredentials; accessToken: string }>(
        `${location.protocol}//${location.host}/api/login`,
        {
          idToken,
        },
        { headers }
      )
      .then(({ data }) => data)
      .then(({ user, accessToken }) => {
        localStorage.setItem("access_token", accessToken);
        dispatch(
          loginUser({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            imageUrl: user.imageUrl,
            active: user.active,
            roles: user.roles,
            createdAt: user.createdAt,
          })
        );
      })
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
