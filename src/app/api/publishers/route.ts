import cloudinary from "@/config/cloudinary/cloudinary.config";
import DBClient from "@/config/prisma/prisma.config";
import { NextRequest, NextResponse } from "next/server";

const { prisma } = DBClient.getInstance();

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

  return prisma.publisher
    .create({
      data: {
        publisher_name: data.name,
        url: data.url,
        image_url: data.imageUrl,
        created_at: new Date(),
        updated_at: new Date(),
      },
    })
    .then((savedPublisher) => ({
      id: savedPublisher.id,
      name: savedPublisher.publisher_name,
      url: savedPublisher.url,
      imageUrl: savedPublisher.image_url,
      createdAt: savedPublisher.created_at,
      resources: savedPublisher.updated_at,
    }))
    .catch(() => {
      return NextResponse.error();
    });
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
