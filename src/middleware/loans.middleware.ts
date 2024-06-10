import {
  SeverityLevel,
  finishGlobalLoading,
  setGlobalAlert,
} from "@/config/redux/reducers/user-interface.reducer";
import { LoansFilter } from "@/hooks/use-owned-loans-table";
import { InstanceLoan } from "@/interfaces/loan/Loan";
import { Action, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

export interface LoansResponse {
  total: number;
  records: InstanceLoan[];
}

export const fetchOwnedLoansMiddleware = (filter: LoansFilter) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  };

  return async (dispatch: Dispatch<Action>) => {
    return axios
      .get<LoansResponse>(
        `${location.protocol}//${location.host}/api/loans/owned`,
        {
          headers,
          params: { ...filter },
        }
      )
      .then(({ data }) => data)
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Loans could not be fetched. ⛔",
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
