import { TestimonialsResponse } from "@/hooks/use-testimonials";
import { NextRequest, NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GET = async (req: NextRequest) => {
  // const page = query.page ? parseInt(query.page as string) : 1;
  // const size = query.size ? parseInt(query.size as string) : 10;
  // const sortBy = query.sortBy as TestimonialsSort;

  // const { records, total } = await getTestimonials(page, size, sortBy);
  const { records, total } = await getTestimonials(/*0, 0, "DATE"*/);

  return NextResponse.json({
    records,
    total,
  });
};

const getTestimonials = () // page: number,
// size: number,
// sortBy: TestimonialsSort
: Promise<TestimonialsResponse> => {
  return Promise.resolve({
    records: [],
    total: 0,
  });
};

export { GET };
