"use client";

import { Fragment } from "react";

import { ResourceCard } from "@/components/card/ResourceCard";
import { ResourcesFilter } from "@/components/filters/resources/ResourcesFilter";
import { FullPagination } from "@/components/pagination/FullPagination";
import { useResource } from "@/hooks/use-resource";
import { ResourceTypes } from "@/interfaces/resource/Type";

const BooksPage = () => {
  const { records } = useResource();

  return (
    <Fragment>
      <ResourcesFilter />

      <FullPagination resourceType={ResourceTypes.BOOK} showTotalRecords />

      <div className="py-5 grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 px-3 gap-1 sm:gap-2 md:gap-2 lg:gap-3">
        {records.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>

      <FullPagination resourceType={ResourceTypes.BOOK} showTotalRecords />
    </Fragment>
  );
};

export default BooksPage;
