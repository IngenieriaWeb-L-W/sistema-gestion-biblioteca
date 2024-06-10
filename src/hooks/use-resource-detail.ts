"use client";

import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { selectResources } from "@/config/redux/reducers/resources.reducer";
import { useAppDispatch } from "@/config/redux/store.config";
import { Resource } from "@/interfaces/resource/Resource";
import {
  fetchFullResourceMiddleware,
  fetchResourceDetailMiddleware,
} from "@/middleware/resources.middleware";

export const useResourceDetail = (slug: string) => {
  const { records } = useSelector(selectResources);
  const dispatch = useAppDispatch();
  const [resource, setResource] = useState<Resource>();

  useEffect(() => {
    if (!records) return;
    const currentResource = records.find((record) => record.slug === slug);
    if (!currentResource) {
      dispatch(fetchFullResourceMiddleware(slug));
    } else {
      dispatch(fetchResourceDetailMiddleware(slug));
    }
  }, [slug, records, dispatch]);

  useEffect(() => {
    if (!records) return;
    const currentResource = records.find((record) => record.id === slug);
    if (!currentResource) return;
    if (!currentResource.detail) return;
    setResource(currentResource);
  }, [slug, records]);

  return { resource };
};
