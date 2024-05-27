import { Fragment } from "react";

import Head from "next/head";

import { ResourceCard } from "@/components/card/ResourceCard";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { FullPagination } from "@/components/pagination/FullPagination";
import { useResources } from "@/hooks/use-resources";
import { ResourceTypes } from "@/interfaces/resource/Type";
import { ResourcesFilter } from "@/components/filters/resources/ResourcesFilter";

const Index = () => {
  const { records } = useResources();

  return (
    <Fragment>
      <Head>
        <title>Books Page</title>
        <meta
          name="description"
          content="Welcome to the books page, he you can find many interesting books!"
        />
      </Head>
      <DashboardLayout>
        <ResourcesFilter />

        <FullPagination resourceType={ResourceTypes.BOOK} showTotalRecords />

        <div className="py-5 grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 px-3 gap-1 sm:gap-2 md:gap-2 lg:gap-3">
          {records.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>

        <FullPagination resourceType={ResourceTypes.BOOK} showTotalRecords />
      </DashboardLayout>
    </Fragment>
  );
};

export default Index;
