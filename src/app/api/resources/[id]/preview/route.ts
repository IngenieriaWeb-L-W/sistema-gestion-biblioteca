import DBClient from "@/config/prisma/prisma.config";
import { ResourcePreview } from "@/interfaces/resource/Resource";
import { ResourceTypes } from "@/interfaces/resource/Type";
import { NextRequest, NextResponse } from "next/server";

const { prisma } = DBClient.getInstance();

const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const resourceBasicInfo = await getResourceBasicInfo(params.id);

  return NextResponse.json(resourceBasicInfo);
};

const getResourceBasicInfo = (id: string): Promise<ResourcePreview | null> => {
  return prisma.resource
    .findUnique({
      where: {
        id,
      },
      include: {
        type: true,
      },
    })
    .then((instance) => {
      if (!instance) return null;
      return {
        type: instance.type.resource_type_name as ResourceTypes,
        id: instance.id,
        name: instance.resource_name,
        lang: instance.slug_name || "",
        imageUrl: instance.image_url || "",
        edition: instance.edition || "",
        author: instance.author || "",
      };
    });
};

export { GET };
