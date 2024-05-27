import { BookDetail } from "@/components/content/BookDetail";
import { BookDetailHero } from "@/components/hero/book/BookDetail";
import { useResourceDetail } from "@/hooks/use-resource-detail";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";

const Index = () => {
  const router = useRouter();
  const { id } = router.query;
  const { resource } = useResourceDetail(id as string);

  if (!resource?.detail) return <></>;

  return (
    <Fragment>
      <Head>
        <title>Book Detail Page</title>
        <meta name="description" content="" />
      </Head>

      <BookDetailHero resource={resource} />

      <BookDetail detail={resource.detail} />
    </Fragment>
  );
};

export default Index;
