import { Resource } from "@/interfaces/resource/Resource";
import { ResourceType, ResourceTypes } from "@/interfaces/resource/Type";
import { NextRequest, NextResponse } from "next/server";

const GET = async (
  req: NextRequest,
  { params }: { params: { type: ResourceTypes } }
) => {
  const records = await getFavoriteResources(params.type); // Fetch 12 elements

  return NextResponse.json(records);
};

const getFavoriteResources = (type: ResourceTypes): Promise<Resource[]> => {
  const resources: Resource[] = [
    {
      id: "1",
      type: ResourceTypes.BOOK,
      imageUrl: "/images/books/test-book-img.jpg",
      categories: [{ id: "1", name: "Category 1" }],
      createdAt: new Date(),
      edition: "1st edition",
      name: "Resource 1",
      shortDescription: "Short description",
      updatedAt: new Date(),
    },
    {
      id: "1",
      type: ResourceTypes.BOOK,
      imageUrl: "/images/books/test-book-img.jpg",
      categories: [{ id: "1", name: "Category 1" }],
      createdAt: new Date(),
      edition: "1st edition",
      name: "Resource 1",
      shortDescription: "Short description",
      updatedAt: new Date(),
    },
    {
      id: "1",
      type: ResourceTypes.BOOK,
      imageUrl: "/images/books/test-book-img.jpg",
      categories: [{ id: "1", name: "Category 1" }],
      createdAt: new Date(),
      edition: "1st edition",
      name: "Resource 1",
      shortDescription: "Short description",
      updatedAt: new Date(),
    },
    {
      id: "1",
      type: ResourceTypes.BOOK,
      imageUrl: "/images/books/test-book-img.jpg",
      categories: [{ id: "1", name: "Category 1" }],
      createdAt: new Date(),
      edition: "1st edition",
      name: "Resource 1",
      shortDescription: "Short description",
      updatedAt: new Date(),
    },
    {
      id: "1",
      type: ResourceTypes.BOOK,
      imageUrl: "/images/books/test-book-img.jpg",
      categories: [{ id: "1", name: "Category 1" }],
      createdAt: new Date(),
      edition: "1st edition",
      name: "Resource 1",
      shortDescription: "Short description",
      updatedAt: new Date(),
    },
    {
      id: "1",
      type: ResourceTypes.BOOK,
      imageUrl: "/images/books/test-book-img.jpg",
      categories: [{ id: "1", name: "Category 1" }],
      createdAt: new Date(),
      edition: "1st edition",
      name: "Resource 1",
      shortDescription: "Short description",
      updatedAt: new Date(),
    },
    {
      id: "1",
      type: ResourceTypes.BOOK,
      imageUrl: "/images/books/test-book-img.jpg",
      categories: [{ id: "1", name: "Category 1" }],
      createdAt: new Date(),
      edition: "1st edition",
      name: "Resource 1",
      shortDescription: "Short description",
      updatedAt: new Date(),
    },
    {
      id: "1",
      type: ResourceTypes.BOOK,
      imageUrl: "/images/books/test-book-img.jpg",
      categories: [{ id: "1", name: "Category 1" }],
      createdAt: new Date(),
      edition: "1st edition",
      name: "Resource 1",
      shortDescription: "Short description",
      updatedAt: new Date(),
    },
    {
      id: "1",
      type: ResourceTypes.BOOK,
      imageUrl: "/images/books/test-book-img.jpg",
      categories: [{ id: "1", name: "Category 1" }],
      createdAt: new Date(),
      edition: "1st edition",
      name: "Resource 1",
      shortDescription: "Short description",
      updatedAt: new Date(),
    },
    {
      id: "1",
      type: ResourceTypes.BOOK,
      imageUrl: "/images/books/test-book-img.jpg",
      categories: [{ id: "1", name: "Category 1" }],
      createdAt: new Date(),
      edition: "1st edition",
      name: "Resource 1",
      shortDescription: "Short description",
      updatedAt: new Date(),
    },
    {
      id: "1",
      type: ResourceTypes.BOOK,
      imageUrl: "/images/books/test-book-img.jpg",
      categories: [{ id: "1", name: "Category 1" }],
      createdAt: new Date(),
      edition: "1st edition",
      name: "Resource 1",
      shortDescription: "Short description",
      updatedAt: new Date(),
    },
    {
      id: "1",
      type: ResourceTypes.BOOK,
      imageUrl: "/images/books/test-book-img.jpg",
      categories: [{ id: "1", name: "Category 1" }],
      createdAt: new Date(),
      edition: "1st edition",
      name: "Resource 1",
      shortDescription: "Short description",
      updatedAt: new Date(),
    },
  ];
  return Promise.resolve(resources);
};

export { GET };
