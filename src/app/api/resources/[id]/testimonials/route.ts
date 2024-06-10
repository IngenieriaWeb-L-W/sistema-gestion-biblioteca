import DBClient from "@/config/prisma/prisma.config";
import { LoanTestimonial } from "@/interfaces/loan/Testimonial";
import { NextRequest, NextResponse } from "next/server";

const { prisma } = DBClient.getInstance();

const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const [records, total] = await Promise.all([
    getResourceTestimonials(params.id),
    countResourceTestimonials(params.id),
  ]);

  return NextResponse.json({ records, total });
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

const countResourceTestimonials = (resourceId: string): Promise<number> => {
  return prisma.resourceTestimonial
    .count({
      where: {
        resourceId,
      },
    })
    .then((count) => count);
};

export { GET };
