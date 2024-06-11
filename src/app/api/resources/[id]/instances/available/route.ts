import DBClient from "@/config/prisma/prisma.config";
import { NextRequest, NextResponse } from "next/server";

const { prisma } = DBClient.getInstance();

const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const available = await countResourceInstances(params.id);
  return NextResponse.json({ available });
};

const countResourceInstances = (id: string) => {
  return prisma.resourceInstance
    .count({
      where: {
        resource_id: id,
        AND: {
          loan: null,
        },
      },
    })
    .then((instances) => instances);
};

export { GET };
