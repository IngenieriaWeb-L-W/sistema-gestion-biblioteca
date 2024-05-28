"use client";

import { useEffect } from "react";

import { useSelector } from "react-redux";

import { selectLoanTransactions } from "@/config/redux/reducers/loan-transactions.reducer";
import { useAppDispatch } from "@/config/redux/store.config";
import { fetchLoanTransactionsByUserMiddleware } from "@/middleware/transactions.middleware";

export const useTransaction = () => {
  const { filters, pagination, records, total } = useSelector(
    selectLoanTransactions
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchLoanTransactionsByUserMiddleware(filters, pagination));
  }, [filters, pagination, dispatch]);

  return { records, total };
};
