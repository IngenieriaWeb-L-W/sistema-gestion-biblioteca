import DBClient from "@/config/prisma/prisma.config";
import { Resource } from "@/interfaces/resource/Resource";
import { ResourceTypes } from "@/interfaces/resource/Type";
import { JsonValue } from "@prisma/client/runtime/library";
import { NextRequest, NextResponse } from "next/server";

const { prisma } = DBClient.getInstance();

const GET = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  const resourceDetail = await getResourceDetail(params.slug); // Fetch 12 elements

  return NextResponse.json(resourceDetail);
};

const getResourceDetail = (slug: string): Promise<Resource | null> => {
  return prisma.resource
    .findUnique({
      where: {
        slug_name: slug,
      },
      include: {
        detail: true,
        categories: true,
        publisher: true,
        type: true,
      },
    })
    .then((resource) => {
      if (!resource) return null;
      return {
        id: resource.id,
        slug: resource.slug_name || "",
        name: resource.resource_name,
        shortDescription: resource.short_description || "",
        imageUrl: resource.image_url || "",
        edition: resource.edition,
        categories: resource.categories.map((category) => ({
          id: category.id,
          name: category.category_name,
        })),
        publisher: {
          id: resource.publisher.id,
          name: resource.publisher.publisher_name,
          imageUrl: resource.publisher.image_url,
          url: resource.publisher.url,
        },
        detail: {
          id: resource.detail.id,
          isbn: resource.detail.isbn || undefined,
          paragraphs:
            getResourceDetailParagraphs(resource.detail.description) || [],
          author: resource.author,
          publicationYear: resource.detail.pub_year,
          // testimonials: resource.testimonials.map((testimonial) => ({
          //   id: testimonial.id,
          //   userId: testimonial.userId,
          //   resourceId: testimonial.resourceId,
          //   rating: testimonial.rating,
          //   title: testimonial.title,
          //   testimonial: testimonial.testimonial || undefined,
          //   createdAt: testimonial.created_at,
          // })),
        },
        type: resource.type.resource_type_name as ResourceTypes,
        createdAt: resource.created_at,
        updatedAt: resource.updated_at,
      };
    });
};

const getResourceDetailParagraphs = (description: JsonValue): string[] => {
  return (
    description?.toString().slice(1, -1).replaceAll('\\"', "").split('","') ||
    []
  );
};

export { GET };