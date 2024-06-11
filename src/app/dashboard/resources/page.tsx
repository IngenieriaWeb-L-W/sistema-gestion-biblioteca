"use client";

import { Fragment } from "react";

import { ResourceCard } from "@/components/card/ResourceCard";
import { ResourcesFilter } from "@/components/filters/resources/ResourcesFilter";
import { useResources } from "@/hooks/use-resources";

const ResourcesPage = () => {
  const { records } = useResources();

  return (
    <Fragment>
      <ResourcesFilter />

      <div className="py-5 grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 px-3 gap-1 sm:gap-2 md:gap-2 lg:gap-3">
        {records.map((resource) => (
          <ResourceCard
            key={resource.id}
            baseRoute="dashboard"
            resource={resource}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="bg-blue-700 p-3 mb-10 text-white rounded-md">
          Load more...
        </button>
      </div>
    </Fragment>
  );
};

export default ResourcesPage;
