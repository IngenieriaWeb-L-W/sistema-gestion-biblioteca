"use client";

import { useAppDispatch } from "@/config/redux/store.config";
import { fetchAvailableInstancesMiddleware } from "@/middleware/resources-instances.middleware";
import { useEffect, useState } from "react";

type UseAvailableInstancesProps = {
  resourceId: string;
};

export const useAvailableInstances = ({
  resourceId,
}: UseAvailableInstancesProps) => {
  const [availableInstances, setAvailableInstances] = useState(-1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAvailableInstancesMiddleware(resourceId)).then((data) => {
      if (!data) return;
      setAvailableInstances(data.available);
    });
  }, [dispatch, resourceId]);

  return { availableInstances };
};
