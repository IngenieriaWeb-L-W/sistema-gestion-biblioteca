import { useAppDispatch } from "@/config/redux/store.config";
import { Resource } from "@/interfaces/resource/Resource";
import { ResourceTypes } from "@/interfaces/resource/Type";
import { fetchFavoriteResourcesMiddleware } from "@/middleware/resources.middleware";
import { useEffect, useState } from "react";

const useFavoriteResources = (type: ResourceTypes) => {
  const [records, setRecords] = useState<Resource[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setRecords([]);
    dispatch(fetchFavoriteResourcesMiddleware(type)).then((response) => {
      setRecords(response);
    });
  }, [type, dispatch]);

  return { records };
};

export default useFavoriteResources;
