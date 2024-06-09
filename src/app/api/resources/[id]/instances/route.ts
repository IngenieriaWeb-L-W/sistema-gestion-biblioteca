import DBClient from "@/config/prisma/prisma.config";
import { ResourceInstanceLangs } from "@/interfaces/instance/ResourceInstanceLang";
import { ResourceInstanceStatus } from "@/interfaces/instance/ResourceInstanceStatus";
import { NextRequest, NextResponse } from "next/server";

const { prisma } = DBClient.getInstance();

type Filters = {
  lang?: ResourceInstanceLangs;
  status?: ResourceInstanceStatus;
  pagination: {
    page: number;
    size: number;
  };
};

const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const query = req.nextUrl.searchParams;
  const filter: Filters = {
    lang: (query.get("lang") as ResourceInstanceLangs) || undefined,
    status: (query.get("status") as ResourceInstanceStatus) || undefined,
    pagination: {
      page: parseInt(query.get("page") || "1"),
      size: parseInt(query.get("size") || "25"),
    },
  };

  const [records, total] = await Promise.all([
    getResourceInstances(params.id, filter),
    countResourceInstances(params.id, filter),
  ]);

  return NextResponse.json({ records, total });
};

const getResourceInstances = (id: string, filter: Filters) => {
  const { lang, status, pagination } = filter;
  const { page, size } = pagination;
  const skip = (page - 1) * size;

  return prisma.resourceInstance
    .findMany({
      where: {
        resource_id: id,
        lang,
        status,
      },
      skip,
      take: size,
    })
    .then((instances) =>
      instances.map((instance) => ({
        id: instance.id,
        name: instance.instance_name,
        lang: instance.lang as ResourceInstanceLangs,
        status: instance.status as ResourceInstanceStatus,
        createdAt: instance.created_at,
        updatedAt: instance.updated_at,
      }))
    );
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
