"use client";

import { useEffect, useState } from "react";

import { useAppDispatch } from "@/config/redux/store.config";
import { Resource } from "@/interfaces/resource/Resource";
import { fetchResourceDetailMiddleware } from "@/middleware/resources.middleware";

export const useResourceDetail = (slug: string) => {
  const dispatch = useAppDispatch();
  const [resource, setResource] = useState<Resource>();

  useEffect(() => {
    dispatch(fetchResourceDetailMiddleware(slug)).then((resource) => {
      if (!resource) return;
      setResource(resource);
    });
  }, [slug, dispatch]);

  return { resource };
};
