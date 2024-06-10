import { useAppDispatch } from "@/config/redux/store.config";
import { ResourcePreview } from "@/interfaces/resource/Resource";
import { fetchResourcePreviewMiddleware } from "@/middleware/resources.middleware";
import { useEffect, useState } from "react";

type useResourceProps = {
  id: string;
};

export const useResource = ({ id }: useResourceProps) => {
  const [record, setRecord] = useState<ResourcePreview>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchResourcePreviewMiddleware(id)).then((response) => {
      setRecord(response || undefined);
    });
  }, [id, dispatch]);

  return { record };
};
