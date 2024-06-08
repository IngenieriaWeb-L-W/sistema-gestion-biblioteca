"use client";

import { useEffect } from "react";

import { useSelector } from "react-redux";

import {
  resetResourcePagination,
  selectResources,
  setResources,
} from "@/config/redux/reducers/resources.reducer";
import { useAppDispatch } from "@/config/redux/store.config";
import { fetchResourcesMiddleware } from "@/middleware/resources.middleware";

export const useResource = () => {
  const { filters, pagination, records, total } = useSelector(selectResources);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchResourcesMiddleware(filters, pagination)).then((response) => {
      if (response) {
        dispatch(
          setResources({ records: response.records, total: response.total })
        );
      }
    });
  }, [filters, pagination, dispatch]);

  useEffect(() => {
    dispatch(resetResourcePagination());
  }, [dispatch]);

  return { records, total };
};
