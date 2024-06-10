"use client";

import { Fragment } from "react";

import Head from "next/head";
import { useParams } from "next/navigation";

import { BookDetail } from "@/components/content/BookDetail";
import { BookDetailHero } from "@/components/hero/book/BookDetail";
import { useResourceDetail } from "@/hooks/use-resource-detail";

const ResourceDetailPage = () => {
  const params = useParams();
  const { slug } = params;
  const { resource } = useResourceDetail(slug as string);

  if (!resource?.detail) return <Fragment></Fragment>;

  return (
    <Fragment>
      <Head>
        <title>Book Detail Page</title>
        <meta name="description" content="" />
      </Head>

      <BookDetailHero resource={resource} />

      <BookDetail resourceId={resource.id} detail={resource.detail} />
    </Fragment>
  );
};

export default ResourceDetailPage;
