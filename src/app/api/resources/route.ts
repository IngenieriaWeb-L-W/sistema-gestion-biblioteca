import cloudinary from "@/config/cloudinary/cloudinary.config";
import prisma from "@/config/prisma/prisma.config";
import { ResourceTypes } from "@/interfaces/resource/Type";
import { NextRequest, NextResponse } from "next/server";

interface Data {
  name: string;
  shortDescription: string;
  edition: string;
  categories: number[];
  type: ResourceTypes;
  paragraphs: string[];
  isbn: string;
  author: string;
  publicationYear: number;
  imageUrl: string;
  publisher: number;
}

const POST = async (req: NextRequest) => {
  if (req.method !== "POST") {
    return NextResponse.error();
  }
  const formData = await req.formData();
  return createResource(formData);
};

const createResource = async (formData: FormData) => {
  const data: Data = {
    name: formData.get("name") as string,
    shortDescription: formData.get("shortDescription") as string,
    edition: formData.get("edition") as string,
    categories: JSON.parse(formData.get("categories") as string) as number[],
    type: formData.get("type") as ResourceTypes,
    paragraphs: formData.getAll("paragraphs").map(String),
    isbn: formData.get("isbn") as string,
    publisher: Number(formData.get("publisher")),
    author: formData.get("author") as string,
    publicationYear: Number(formData.get("publicationYear")),
    imageUrl: formData.get("imageUrl") as string,
  };
  try {
    const uploadResult = await cloudinary.uploader.upload(data.imageUrl, {
      folder: "resources",
    });
    data.imageUrl = uploadResult.secure_url;
  } catch (error) {
    return NextResponse.error();
  }
  const resourceTypes = await getAllResourceTypes();
  return prisma.resource
    .create({
      data: {
        isbn: data.isbn,
        author: data.author,
        resource_name: data.name,
        pub_year: data.publicationYear,
        edition: data.edition,
        categories: {
          connect: data.categories.map((id) => ({ id })),
        },
        type: {
          connect: {
            id: resourceTypes.find((type) => type.name === data.type)!.id,
          },
        },
        publisher: {
          connect: {
            id: data.publisher,
          },
        },
      },
    })
    .then(() => NextResponse.json({ message: "Resource created successfully" }))
    .catch(() => NextResponse.error());
};

const getAllResourceTypes = () => {
  return prisma.resourceType.findMany().then((types) => {
    return types.map((type) => {
      return {
        id: type.id,
        name: type.resource_type_name as ResourceTypes,
        maxLoanDays: type.max_loan_days,
        maxUnitsPerLoan: type.max_units_per_loan,
      };
    });
  });
};

export { POST };
