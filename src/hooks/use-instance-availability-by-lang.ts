import { useAppDispatch } from "@/config/redux/store.config";
import { InstanceLang } from "@/interfaces/instance/Instance";
import { fetchInstanceAvailableItemsByLang } from "@/middleware/resources-instances.middleware";
import { useEffect, useState } from "react";

type CountByLang = {
  lang: InstanceLang;
  count: number;
};

const useInstanceAvailabilityByLang = (resourceId: string) => {
  const [items, setItems] = useState<CountByLang[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchInstanceAvailableItemsByLang(resourceId)).then((data) => {
      if (!data) return;
      setItems(data);
    });
  }, [resourceId, dispatch]);

  return { itemsByLang: items };
};

export default useInstanceAvailabilityByLang;
