import DBClient from "@/config/prisma/prisma.config";
import { ResourceDetail } from "@/interfaces/resource/Detail";
import { Resource } from "@/interfaces/resource/Resource";
import { ResourceTypes } from "@/interfaces/resource/Type";
import { NextRequest, NextResponse } from "next/server";

const { prisma } = DBClient.getInstance();

const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const resourceDetail = await getResourceDetail(params.id); // Fetch 12 elements

  return NextResponse.json(resourceDetail);
};

const getResourceDetail = (id: string) => {
  return prisma.resourceDetail.findUnique({
    where: {
      resource_id: id,
    },
    include: {
      resource: true,
    },
  });
};

export { GET };
