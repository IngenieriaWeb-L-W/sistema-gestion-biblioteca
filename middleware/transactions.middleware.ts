import { Action, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

import {
  LoanTransactionFilters,
  setLoanTransactions,
} from "@/config/redux/reducers/loan-transactions.reducer";
import { Pagination } from "@/config/redux/reducers/resource-categories.reducer";
import {
  SeverityLevel,
  finishGlobalLoading,
  setGlobalAlert,
  startGlobalLoading,
} from "@/config/redux/reducers/user-interface.reducer";
import { transactions } from "@/data/transactions/transactionsData";

export const fetchLoanTransactionsByUserMiddleware = (
  filters: LoanTransactionFilters,
  pagination: Pagination
) => {
  console.log({ filters, pagination });
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
      records: transactions,
      total: transactions.length,
    })
      .then(({ records, total }) => {
        dispatch(setLoanTransactions({ records, total }));
      })
      .catch((/* error */) => {
        dispatch(
          setGlobalAlert({
            message: "Loan transactions could not be fetched ⛔",
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
