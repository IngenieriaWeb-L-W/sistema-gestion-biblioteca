import DBClient from "@/config/prisma/prisma.config";
import { NextRequest, NextResponse } from "next/server";

const { prisma } = DBClient.getInstance();

const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const resourceBasicInfo = await getResourceBasicInfo(params.id);

  return NextResponse.json(resourceBasicInfo);
};

const getResourceBasicInfo = (id: string) => {
  return prisma.resource
    .findUnique({
      where: {
        id,
      },
    })
    .then((instance) => {
      if (!instance) return null;
      return {
        id: instance.id,
        name: instance.resource_name,
        lang: instance.slug_name || "",
        imageUrl: instance.image_url || "",
        edition: instance.edition || "",
        author: instance.author || "",
      };
    });
};

const countResourceInstances = (id: string, filter: Filters) => {
  const { lang, status } = filter;

  return prisma.resourceInstance
    .count({
      where: {
        resource_id: id,
        lang,
        status,
      },
    })
    .then((total) => total);
};

export { GET };
