import DBClient from "@/config/prisma/prisma.config";
import { NextRequest, NextResponse } from "next/server";

const { prisma } = DBClient.getInstance();

const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const statsByStatus = await getResourceInstancesStatsByStatus(params.id); // Fetch 12 elements
    return NextResponse.json(statsByStatus);
  } catch (error) {
    return NextResponse.error();
  }
};

const getResourceInstancesStatsByStatus = (id: string) => {
  return prisma.resourceInstance
    .groupBy({
      by: ["status"],
      _count: {
        status: true,
      },
      where: {
        resource_id: id,
      },
    })
    .then((data) => {
      return data.map(({ status, _count }) => ({
        status,
        count: _count.status,
      }));
    });
};

export { GET };
