import { useEffect } from "react";

import { useSelector } from "react-redux";

import { selectResourceCategories } from "@/config/redux/reducers/resource-categories.reducer";
import { useAppDispatch } from "@/config/redux/store.config";
import { fetchResourceCategoriesMiddleware } from "@/middleware/resources.middleware";

export const useResourceCategories = () => {
  const { filters, pagination, records, total } = useSelector(
    selectResourceCategories
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchResourceCategoriesMiddleware(filters, pagination));
  }, [filters, pagination, dispatch]);

  return { records, total };
};
