"use client";
import { useAppDispatch } from "@/config/redux/store.config";
import { Publisher } from "@/interfaces/resource/Publisher";
import { fetchPublishersMiddleware } from "@/middleware/publishers.middleware";
import { useEffect, useState } from "react";

type UsePublisherProps = {
  page: number;
  size: number;
};

type PublishersResponse = {
  records: Publisher[];
  total: number;
};

export const usePublisher = ({ page, size }: UsePublisherProps) => {
  const [publishers, setPublishers] = useState<PublishersResponse>({
    records: [],
    total: 0,
  });

  const { records, total } = publishers;

  const dispatch = useAppDispatch();

  const addPublisher = (publisher: Publisher) => {
    setPublishers({
      records: [publisher, ...records],
      total: total + 1,
    });
  };

  const removePublisher = (id: number) => {
    setPublishers({
      records: records.filter((p) => p.id !== id),
      total: total - 1,
    });
  };

  useEffect(() => {
    dispatch(fetchPublishersMiddleware({ page, size })).then((response) => {
      if (!response) return;
      setPublishers(response);
    });
  }, [page, size, dispatch]);

  return { records, total, addPublisher, removePublisher };
};
