import DBClient from "@/config/prisma/prisma.config";
import { InstanceLang, InstanceStatus } from "@/interfaces/instance/Instance";
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

type Data = {
  name: string;
  lang: InstanceLang;
  status: InstanceStatus;
  count: number;
};

const POST = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  if (req.method !== "POST") return NextResponse.error();

  const body = await req.json();
  const result = await createResourceInstances(params.id, body as Data);

  return NextResponse.json({
    message: result.count + " Resources instances created",
  });
};

const createResourceInstances = async (resourceId: string, data: Data) => {
  const { name, lang, status, count } = data;
  const instances = Array.from({ length: count }).map(() => ({
    instance_name: name,
    lang,
    status,
    resource_id: resourceId,
    created_at: new Date(),
    updated_at: new Date(),
  }));

  return prisma.resourceInstance.createMany({
    data: instances,
  });
};

export { GET, POST };
