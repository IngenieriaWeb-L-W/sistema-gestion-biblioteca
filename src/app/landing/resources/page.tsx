"use client";

import { Fragment } from "react";

import { ResourceCard } from "@/components/card/ResourceCard";
import { ResourcesFilter } from "@/components/filters/resources/ResourcesFilter";
import ResourcesSkeleton from "@/components/skeleton/ResourcesSkeleton";
import { useResources } from "@/hooks/use-resources";

const ResourcesPage = () => {
  const { records } = useResources();

  return (
    <Fragment>
      <ResourcesFilter />

      {/* <FullPagination resourceType={ResourceTypes.BOOK} showTotalRecords /> */}

      {records.length > 0 ? (
        <div className="py-5 grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 px-3 gap-1 sm:gap-2 md:gap-2 lg:gap-3">
          {records.map((resource) => (
            <ResourceCard
              key={resource.id}
              baseRoute="landing"
              resource={resource}
              typeRibbon
            />
          ))}
        </div>
      ) : (
        <ResourcesSkeleton cols={{ lg: 4, md: 2, sm: 1 }} count={12} />
      )}

      <div className="flex justify-center">
        <button className="bg-blue-700 p-3 mb-10 text-white rounded-md">
          Load more...
        </button>
      </div>
    </Fragment>
  );
};

export default ResourcesPage;
