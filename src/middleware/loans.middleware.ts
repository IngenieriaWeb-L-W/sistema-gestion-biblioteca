import { resetCart } from "@/config/redux/reducers/loans-cart.reducer";
import {
  SeverityLevel,
  finishGlobalLoading,
  setGlobalAlert,
} from "@/config/redux/reducers/user-interface.reducer";
import { LoansFilter } from "@/hooks/use-owned-loans-table";
import { InstanceLang } from "@/interfaces/instance/Instance";
import { InstanceLoan } from "@/interfaces/loan/Loan";
import { Action, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

export interface LoansResponse {
  total: number;
  records: InstanceLoan[];
}

export interface LoanResponse {
  status: number;
  message: string;
  resourceId?: string;
}

export const fetchOwnedLoansMiddleware = (filter: LoansFilter) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  };
  const params = {
    search: filter.search,
    page: filter.pagination.page,
    limit: filter.pagination.size,
  };
  return async (dispatch: Dispatch<Action>) => {
    return axios
      .get<LoansResponse>(
        `${location.protocol}//${location.host}/api/loans/owned`,
        { headers, params }
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

export const confirmBorrowAllItemsMiddleware = (
  items: {
    resourceId: string;
    lang: InstanceLang;
  }[]
) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  };
  return async (dispatch: Dispatch<Action>) => {
    return axios
      .post<LoanResponse>(
        `${location.protocol}//${location.host}/api/loans`,
        items,
        { headers }
      )
      .then(({ data }) => data)
      .then((response) => {
        if (response.status === 409) {
          dispatch(
            setGlobalAlert({
              message: `No items available to loan for resource ${response.resourceId}`,
              timeout: 5000,
              severity: SeverityLevel.ERROR,
            })
          );
          return;
        }
        dispatch(
          setGlobalAlert({
            message: "Items borrowed successfully! 🎉",
            timeout: 5000,
            severity: SeverityLevel.SUCCESS,
          })
        );
        dispatch(resetCart());
      })
      .catch((error) => {
        dispatch(
          setGlobalAlert({
            message: JSON.stringify(error),
            timeout: 5000,
            severity: SeverityLevel.ERROR,
          })
        );
      })
      .finally(() => {
        dispatch(finishGlobalLoading());
      });
  };
};
