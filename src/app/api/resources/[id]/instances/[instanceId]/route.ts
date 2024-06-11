import DBClient from "@/config/prisma/prisma.config";
import { InstanceStatus } from "@/interfaces/instance/Instance";
import { ResourceInstanceLangs } from "@/interfaces/instance/ResourceInstanceLang";
import { ResourceInstanceStatus } from "@/interfaces/instance/ResourceInstanceStatus";
import { NextRequest, NextResponse } from "next/server";

const { prisma } = DBClient.getInstance();

type Data = {
  status: InstanceStatus;
};

const PATCH = async (
  req: NextRequest,
  { params }: { params: { instanceId: string } }
) => {
  if (req.method !== "PATCH") return NextResponse.error();
  const { instanceId } = params;
  const body = await req.json();
  const { status } = body as Data;
  const result = await updateResourceInstanceStatus(instanceId, status);

  return NextResponse.json(result);
};

const updateResourceInstanceStatus = (
  instanceId: string,
  status: InstanceStatus
) => {
  return prisma.resourceInstance
    .update({
      where: {
        id: instanceId,
      },
      data: {
        status,
      },
    })
    .then((instance) => ({
      id: instance.id,
      name: instance.instance_name,
      lang: instance.lang as ResourceInstanceLangs,
      status: instance.status as ResourceInstanceStatus,
      createdAt: instance.created_at,
      updatedAt: instance.updated_at,
    }));
};

export { PATCH };
