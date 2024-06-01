"use client";

import { Pagination } from "@/config/redux/reducers/loan-transactions.reducer";
import { useAppDispatch } from "@/config/redux/store.config";
import { User } from "@/interfaces/user/User";
import { fetchUsersMiddleware } from "@/middleware/users.middleware";
import { useEffect, useState } from "react";

export enum Election {
  BOTH = "all",
  ACTIVE = "active",
  INACTIVE = "inactive",
}

export interface UsersFilter {
  search: string;
  role: string;
  status: Election;
  pagination: Pagination;
}

export interface UsersResponse {
  total: number;
  records: User[];
}

const useUsersTable = (usersFilter: UsersFilter) => {
  const dispatch = useAppDispatch();

  const [records, setRecords] = useState<UsersResponse>({
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

export default useUsersTable;
