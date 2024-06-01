import { Action, Dispatch } from "@reduxjs/toolkit";

import {
  SeverityLevel,
  setGlobalAlert,
} from "@/config/redux/reducers/user-interface.reducer";

export const fetchActiveUsers = () => {
  return async (dispatch: Dispatch<Action>) => {
    // const headers = {
    //   Authorization: `Bearer ${localStorage.getItem("token")}`,
    // };
    // return axios
    //   .get<{ total: number; records: LoanTransaction[] }>(
    //     `${location.protocol}//${location.host}/api/loans/transactions`,
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
      });
  };
};

export const fetchActiveResources = () => {
  return async (dispatch: Dispatch<Action>) => {
    // const headers = {
    //   Authorization: `Bearer ${localStorage.getItem("token")}`,
    // };
    // return axios
    //   .get<{ total: number; records: LoanTransaction[] }>(
    //     `${location.protocol}//${location.host}/api/loans/transactions`,
    //     {
    //       params: { ...filters, ...pagination },
    //       headers,
    //     }
    //   )
    //.then(({ data }) => data)
    return Promise.resolve({
      resources: 150,
    })
      .then(({ resources }) => resources)
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Resources count could not be fetched ⛔",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        return 0;
      });
  };
};

export const fetchDailyLoans = () => {
  return async (dispatch: Dispatch<Action>) => {
    // const headers = {
    //   Authorization: `Bearer ${localStorage.getItem("token")}`,
    // };
    // return axios
    //   .get<{ total: number; records: LoanTransaction[] }>(
    //     `${location.protocol}//${location.host}/api/loans/transactions`,
    //     {
    //       params: { ...filters, ...pagination },
    //       headers,
    //     }
    //   )
    //.then(({ data }) => data)
    return Promise.resolve({
      dailyLoans: 150,
    })
      .then(({ dailyLoans }) => dailyLoans)
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Daily loans count could not be fetched ⛔",
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
        return 0;
      });
  };
};
