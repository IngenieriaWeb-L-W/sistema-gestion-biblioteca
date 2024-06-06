import cloudinary from "@/config/cloudinary/cloudinary.config";
import prisma from "@/config/prisma/prisma.config";
import { NextRequest, NextResponse } from "next/server";

type Data = {
  name: string;
  url: string;
  imageUrl: string;
};

const POST = async (req: NextRequest) => {
  if (req.method !== "POST") {
    return NextResponse.error();
  }
  const formData = await req.formData();
  return createPublisher(formData);
};

const createPublisher = async (formData: FormData) => {
  const data: Data = {
    name: formData.get("name") as string,
    url: formData.get("url") as string,
    imageUrl: formData.get("imageUrl") as string,
  };

  try {
    const uploadResult = await cloudinary.uploader.upload(data.imageUrl, {
      folder: "publishers",
    });
    data.imageUrl = uploadResult.secure_url;
  } catch (error) {
    return NextResponse.error();
  }
  const savedPublisher = await prisma.publisher.create({
    data: {
      publisher_name: data.name,
      url: data.url,
      image_url: data.imageUrl,
      created_at: new Date(),
      updated_at: new Date(),
    },
  });
  return NextResponse.json(savedPublisher);
};

const GET = async (req: NextRequest) => {
  if (req.method !== "GET") {
    return NextResponse.error();
  }
  const [publishers, total] = await Promise.all([
    prisma.publisher.findMany(),
    prisma.publisher.count(),
  ]);

  return NextResponse.json({
    records: publishers.map((publisherDB) => ({
      id: publisherDB.id,
      name: publisherDB.publisher_name,
      url: publisherDB.url,
      imageUrl: publisherDB.image_url,
      createdAt: publisherDB.created_at.toISOString(),
      resources: [],
    })),
    total,
  });
};

export { GET, POST };
