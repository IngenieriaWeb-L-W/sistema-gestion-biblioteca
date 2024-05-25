import React, { Fragment } from "react";

import { BookCard } from "@/components/card/BookCard";
import Head from "next/head";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const Index = () => {
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
        <div className="py-12 grid grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </DashboardLayout>
    </Fragment>
  );
};

export default Index;
