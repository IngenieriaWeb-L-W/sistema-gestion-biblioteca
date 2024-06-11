import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store.config";
import { LoanTransaction } from "@/interfaces/loan/Transaction";

export interface LoanTransactionFilters {
  search?: string;
  from?: Date;
  to?: Date;
}

export interface Pagination {
  page: number;
  size: number;
}

export interface LoanTransactionsState {
  records: LoanTransaction[];
  total: number;
  filters: LoanTransactionFilters;
  pagination: Pagination;
}

const initialState: LoanTransactionsState = {
  records: [],
  total: 0,
  filters: {},
  pagination: {
    page: 1,
    size: 10,
  },
};

// Freeze the initial state to prevent accidental changes
Object.freeze(initialState);

export const loanTransactionsSlice = createSlice({
  name: "loanTransactions",
  initialState,
  reducers: {
    setLoanTransactionsFilters: (
      state,
      action: PayloadAction<LoanTransactionFilters>
    ) => {
      state.filters = action.payload;
    },
    resetLoanTransactionFilters: (state) => {
      state.filters = initialState.filters;
    },
    setLoanTransactionPagination: (
      state,
      action: PayloadAction<Pagination>
    ) => {
      state.pagination = action.payload;
    },
    resetLoanTransactionPagination: (state) => {
      state.pagination = initialState.pagination;
    },
    setLoanTransactions: (
      state,
      action: PayloadAction<{ records: LoanTransaction[]; total: number }>
    ) => {
      state.records = action.payload.records;
      state.total = action.payload.total;
    },
    addLoanTransaction: (state, action: PayloadAction<LoanTransaction>) => {
      state.records.push(action.payload);
      state.total = state.total + 1;
    },
  },
});

export const selectLoanTransactions = (state: RootState) =>
  state.loanTransactions;

export const {
  setLoanTransactionsFilters,
  resetLoanTransactionFilters,
  setLoanTransactionPagination,
  resetLoanTransactionPagination,
  setLoanTransactions,
  addLoanTransaction,
} = loanTransactionsSlice.actions;

export const { reducer: loanTransactionsReducer } = loanTransactionsSlice;
