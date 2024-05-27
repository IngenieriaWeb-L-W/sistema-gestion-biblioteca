import { Fragment } from "react";

import Head from "next/head";

import { ResourceCard } from "@/components/card/ResourceCard";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { FullPagination } from "@/components/pagination/FullPagination";
import { useResources } from "@/hooks/use-resources";
import { ResourceTypes } from "@/interfaces/resource/Type";

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
        <div>
          <h1>Hello</h1>
        </div>

        <FullPagination resourceType={ResourceTypes.BOOK} showTotalRecords />

        <div className="py-12 grid grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
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
