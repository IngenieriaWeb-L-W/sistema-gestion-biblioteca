import { BookDetailHero } from "@/components/hero/book/BookDetail";
import Head from "next/head";
import { Fragment } from "react";

const Index = () => {
  // TODO: Read the param nameUrl from the URL and fetch the book detail data
  return (
    <Fragment>
      <Head>
        <title>Book Detail Page</title>
        <meta name="description" content="" />
      </Head>
      <BookDetailHero />
    </Fragment>
  );
};

export default Index;
