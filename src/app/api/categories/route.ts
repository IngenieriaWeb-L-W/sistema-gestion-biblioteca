import prisma from "@/config/prisma/prisma.config";
import { NextRequest, NextResponse } from "next/server";

type Data = {
  name: string;
};

const POST = async (req: NextRequest) => {
  if (req.method !== "POST") {
    return NextResponse.error();
  }
  const body = await req.json();
  return createPublisher(body as Data);
};

const createPublisher = async (data: Data) => {
  return prisma.category
    .create({
      data: {
        category_name: data.name,
        created_at: new Date(),
        updated_at: new Date(),
      },
    })
    .then((savedCategory) =>
      NextResponse.json({
        id: savedCategory.id,
        name: savedCategory.category_name,
        createdAt: savedCategory.created_at,
      })
    );
};

const GET = async (req: NextRequest) => {
  if (req.method !== "GET") {
    return NextResponse.error();
  }
  const [categories, total] = await Promise.all([
    prisma.category.findMany(),
    prisma.category.count(),
  ]);

  return NextResponse.json({
    records: categories.map((categoryDB) => ({
      id: categoryDB.id,
      name: categoryDB.category_name,
      createdAt: categoryDB.created_at.toISOString(),
    })),
    total,
  });
};

export { GET, POST };
