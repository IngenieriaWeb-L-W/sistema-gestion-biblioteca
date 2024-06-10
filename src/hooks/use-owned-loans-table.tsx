"use client";

import { Pagination } from "@/config/redux/reducers/loan-transactions.reducer";
import { useAppDispatch } from "@/config/redux/store.config";
import { InstanceLoan } from "@/interfaces/loan/Loan";
import { fetchOwnedLoansMiddleware } from "@/middleware/loans.middleware";
import { useEffect, useState } from "react";

export interface LoansFilter {
  search: string;
  pagination: Pagination;
}

export interface LoansResponse {
  total: number;
  records: InstanceLoan[];
}

export const useOwnedLoansTable = (usersFilter: LoansFilter) => {
  const dispatch = useAppDispatch();

  const [records, setRecords] = useState<LoansResponse>({
    total: 0,
    records: [],
  });

  useEffect(() => {
    dispatch(fetchOwnedLoansMiddleware(usersFilter)).then((response) => {
      if (!response) return;
      setRecords(response);
    });
  }, [usersFilter, dispatch]);

  return records;
};
