import { useEffect } from "react";

import { useSelector } from "react-redux";

import { selectResources } from "@/config/redux/reducers/resources.reducer";
import { useAppDispatch } from "@/config/redux/store.config";
import { fetchResourcesMiddleware } from "@/middleware/resources.middleware";

export const useResource = () => {
  const { filters, pagination, records, total } = useSelector(selectResources);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchResourcesMiddleware(filters, pagination));
  }, [filters, pagination, dispatch]);

  return { records, total };
};
