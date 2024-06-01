import {
  SeverityLevel,
  finishGlobalLoading,
  setGlobalAlert,
  startGlobalLoading,
} from "@/config/redux/reducers/user-interface.reducer";
import { UserPublicInfo } from "@/hooks/use-user-public-info";
import { Action, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchActiveUsers = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(
      startGlobalLoading({ message: "Fetching your loan transactions..." })
    );
    // const headers = {
    //   Authorization: `Bearer ${localStorage.getItem("token")}`,
    // };
    // return axios
    //   .get<{ total: number; records: LoanTransaction[] }>(
    //     `http://localhost:3000/api/loans/transactions`,
    //     {
    //       params: { ...filters, ...pagination },
    //       headers,
    //     }
    //   )
    //.then(({ data }) => data)
    return Promise.resolve({
      users: 150,
    })
      .then(({ users }) => users)
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Users count could not be fetched ⛔",
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

export const fetchUserPublicInfoMiddleware = (id: string) => {
  return async (dispatch: Dispatch<Action>) => {
    return axios
      .get<UserPublicInfo>(`http://localhost:3000/api/users/${id}/public-info`)
      .then(({ data }) => data)
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "User public info could not be fetched ⛔",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
      });
  };
};
