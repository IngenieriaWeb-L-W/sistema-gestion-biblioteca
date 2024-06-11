import DBClient from "@/config/prisma/prisma.config";
import { InstanceLang } from "@/interfaces/instance/Instance";
import { NextRequest, NextResponse } from "next/server";

const { prisma } = DBClient.getInstance();

const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const available = await countResourceCountsByLang(params.id);
  return NextResponse.json({ available });
};

const countResourceCountsByLang = (resourceId: string) => {
  return prisma.resourceInstance
    .findMany({
      where: {
        resource_id: resourceId,
        AND: {
          loan: null,
        },
      },
    })
    .then((instances) => {
      const uniqueLangs = Array.from(
        new Set(instances.map(({ lang }) => lang as InstanceLang))
      );
      return uniqueLangs.map((lang) => ({
        lang,
        count: instances.filter((instance) => instance.lang === lang).length,
      }));
    });
};

export { GET };
