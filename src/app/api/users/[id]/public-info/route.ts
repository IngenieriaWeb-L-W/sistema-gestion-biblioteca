import { NextRequest, NextResponse } from "next/server";

import { UserPublicInfo } from "@/hooks/use-user-public-info";
import prisma from "@/config/prisma/prisma.config";

const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const userDB = await prisma.user.findFirst({
    where: {
      id: params.id,
    },
  });

  if (!userDB) return NextResponse.error();

  return NextResponse.json({
    id: userDB.id,
    firstName: userDB.first_name,
    lastName: userDB.last_name,
    imageUrl: userDB.image_url,
  } as UserPublicInfo);
};

export { GET };
