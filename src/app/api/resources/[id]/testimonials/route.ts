import DBClient from "@/config/prisma/prisma.config";
import { LoanTestimonial } from "@/interfaces/loan/Testimonial";
import { NextRequest, NextResponse } from "next/server";

const { prisma } = DBClient.getInstance();

const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const resourceBasicInfo = await getResourceTestimonials(params.id);

  return NextResponse.json(resourceBasicInfo);
};

const getResourceTestimonials = (
  resourceId: string
): Promise<LoanTestimonial[] | null> => {
  return prisma.resourceTestimonial
    .findMany({
      where: {
        resourceId,
      },
      include: {
        user: true,
      },
    })
    .then((testimonials) => {
      return testimonials.map((testimonial) => ({
        id: testimonial.id,
        user: {
          id: testimonial.user.id,
          firstName: testimonial.user.first_name,
          lastName: testimonial.user.last_name,
          imageUrl: testimonial.user.image_url,
        },
        rating: testimonial.rating,
        title: testimonial.title,
        testimonial: testimonial.testimonial || "",
        createdAt: testimonial.created_at,
      }));
    });
};

export { GET };
