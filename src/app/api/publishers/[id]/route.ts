import prisma from "@/config/prisma/prisma.config";
import { NextRequest, NextResponse } from "next/server";

const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  if (req.method !== "DELETE") {
    return NextResponse.error();
  }

  const { id } = params;

  const result = await prisma.publisher.delete({
    where: {
      id,
    },
  });

  if (!result) {
    return NextResponse.error();
  }

  return NextResponse.json(result);
};

export { DELETE };
