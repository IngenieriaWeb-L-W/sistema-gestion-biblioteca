import { Action, Dispatch } from "@reduxjs/toolkit";

import { setLoanTransactions } from "@/config/redux/reducers/loan-transactions.reducer";
import {
  SeverityLevel,
  finishGlobalLoading,
  setGlobalAlert,
  startGlobalLoading,
} from "@/config/redux/reducers/user-interface.reducer";
import { transactions } from "@/data/transactions/transactionsData";

// filters: LoanTransactionFilters,
// pagination: Pagination
export const fetchLoanTransactionsByUserMiddleware = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch(
      startGlobalLoading({ message: "Fetching your loan transactions..." })
    );
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
