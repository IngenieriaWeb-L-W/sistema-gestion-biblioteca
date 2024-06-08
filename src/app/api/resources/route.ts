/* eslint-disable indent */
import cloudinary from "@/config/cloudinary/cloudinary.config";
import prisma from "@/config/prisma/prisma.config";
import { ResourceTypes } from "@/interfaces/resource/Type";
import { NextRequest, NextResponse } from "next/server";
import { ResourcesTypes } from "../../../../prisma/generated/client";

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

type Filters = {
  search: string;
  categories: number[];
  type: ResourceTypes;
  pagination: {
    page: number;
    size: number;
  };
};

const GET = async (req: NextRequest) => {
  const query = req.nextUrl.searchParams;
  const resourcesFilter: Filters = {
    search: query.get("search") || "",
    categories: query.getAll("categories").map(Number),
    type: query.get("type") as ResourceTypes,
    pagination: {
      page: parseInt(query.get("page") || "1"),
      size: parseInt(query.get("size") || "25"),
    },
  };

  return Promise.all([
    getFilteredUsers(resourcesFilter),
    countFilteredUsers(resourcesFilter),
  ])
    .then(([records, total]) => {
      return NextResponse.json({ records, total });
    })
    .catch(() => {
      return NextResponse.error();
    });
};

const getFilteredUsers = (filters: Filters) => {
  const { pagination } = filters;
  const skip = (pagination.page - 1) * pagination.size;

  return prisma.resource
    .findMany({
      where: {
        resource_name: filters.search
          ? {
              contains: filters.search,
            }
          : undefined,
        categories:
          filters.categories.length > 0
            ? {
                some: {
                  id: {
                    in: filters.categories,
                  },
                },
              }
            : undefined,
        type: filters.type
          ? {
              resource_type_name: filters.type as ResourcesTypes,
            }
          : undefined,
      },
      include: {
        categories: true,
        type: true,
      },
      skip,
      take: pagination.size,
    })
    .then((filteredResources) =>
      filteredResources.map((resource) => ({
        id: resource.id,
        name: resource.resource_name,
        imageUrl: resource.image_url,
        createdAt: resource.created_at,
        shortDescription: resource.short_description,
        updatedAt: resource.updated_at,
        type: resource.type.resource_type_name as ResourceTypes,
        edition: resource.edition,
        categories: resource.categories.map((category) => ({
          id: category.id,
          name: category.category_name,
        })),
      }))
    );
};

const countFilteredUsers = (filters: Filters) => {
  return prisma.resource
    .count({
      // where: {
      //   resource_name: {
      //     contains: filters.search,
      //   },
      //   categories: {
      //     some: {
      //       id: {
      //         in: filters.categories,
      //       },
      //     },
      //   },
      //   type: {
      //     resource_type_name: filters.type as ResourcesTypes,
      //   },
      // },
    })
    .then((count) => count);
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

export { GET, POST };
