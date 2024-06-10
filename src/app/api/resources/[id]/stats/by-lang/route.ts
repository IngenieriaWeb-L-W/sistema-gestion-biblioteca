import DBClient from "@/config/prisma/prisma.config";
import { NextRequest, NextResponse } from "next/server";

const { prisma } = DBClient.getInstance();

const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const statsByLang = await getResourceInstancesStatsByLang(params.id); // Fetch 12 elements
    return NextResponse.json(statsByLang);
  } catch (error) {
    return NextResponse.error();
  }
};

const getResourceInstancesStatsByLang = (id: string) => {
  return prisma.resourceInstance
    .groupBy({
      by: ["lang"],
      _count: {
        lang: true,
      },
      where: {
        resource_id: id,
      },
    })
    .then((data) => {
      return data.map(({ lang, _count }) => ({
        lang,
        count: _count.lang,
      }));
    });
};

export { GET };
