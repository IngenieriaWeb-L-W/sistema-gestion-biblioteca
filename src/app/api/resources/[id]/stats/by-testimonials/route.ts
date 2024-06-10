import DBClient from "@/config/prisma/prisma.config";
import { NextRequest, NextResponse } from "next/server";

const { prisma } = DBClient.getInstance();

const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const statsByTestimonials = await getResourceInstancesStatsByTestimonials(
      params.id
    ); // Fetch 12 elements
    return NextResponse.json(statsByTestimonials);
  } catch (error) {
    return NextResponse.error();
  }
};

const getResourceInstancesStatsByTestimonials = (id: string) => {
  return prisma.resourceTestimonial
    .groupBy({
      by: ["rating"],
      _count: {
        rating: true,
      },
      where: {
        resourceId: id,
      },
    })
    .then((data) => {
      return data.map(({ rating, _count }) => ({
        rating,
        count: _count.rating,
      }));
    });
};

export { GET };
