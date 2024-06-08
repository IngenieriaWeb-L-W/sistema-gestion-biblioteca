import {
  selectResourceInstances,
  setResourcesInstances,
} from "@/config/redux/reducers/resource-instances.reducer";
import { useAppDispatch } from "@/config/redux/store.config";
import { fetchResourceInstancesMiddleware } from "@/middleware/resources-instances.middleware";
import { useEffect } from "react";
import { useSelector } from "react-redux";

type UseResourceInstances = {
  id: string;
};

const useResourceInstances = ({ id }: UseResourceInstances) => {
  const dispatch = useAppDispatch();
  const { records, total, filters, pagination } = useSelector(
    selectResourceInstances
  );
  useEffect(() => {
    dispatch(fetchResourceInstancesMiddleware(id, filters, pagination)).then(
      (instances) => {
        if (!instances) return;
        dispatch(setResourcesInstances(instances));
      }
    );
  }, [dispatch, id, filters, pagination]);

  return { records, total, filters, pagination };
};

export default useResourceInstances;
