"use client";

import { Pagination } from "@/config/redux/reducers/loan-transactions.reducer";
import { useAppDispatch } from "@/config/redux/store.config";
import { InstanceLoan } from "@/interfaces/loan/Loan";
import { User } from "@/interfaces/user/User";
import { fetchUsersMiddleware } from "@/middleware/users.middleware";
import { useEffect, useState } from "react";

export enum Election {
  BOTH = "all",
  ACTIVE = "active",
  INACTIVE = "inactive",
}

export interface LoansFilter {
  search: string;
  pagination: Pagination;
}

export interface LoansResponse {
  total: number;
  records: InstanceLoan[];
}

const useLoansTable = (usersFilter: LoansFilter) => {
  const dispatch = useAppDispatch();

  const [records, setRecords] = useState<LoansResponse>({
    total: 0,
    records: [],
  });

  useEffect(() => {
    dispatch(fetchUsersMiddleware(usersFilter)).then((response) => {
      setRecords(response);
    });
  }, [usersFilter, dispatch]);

  return records;
};

export default useLoansTable;
