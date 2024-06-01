import {
  TestimonialsResponse,
  TestimonialsSort,
} from "@/hooks/use-testimonials";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidV4 } from "uuid";

const GET = async (req: NextRequest) => {
  // const { query } = req;

  // const page = query.page ? parseInt(query.page as string) : 1;
  // const size = query.size ? parseInt(query.size as string) : 10;
  // const sortBy = query.sortBy as TestimonialsSort;

  // const { records, total } = await getTestimonials(page, size, sortBy);
  const { records, total } = await getTestimonials(0, 0, "DATE");

  return NextResponse.json({
    records,
    total,
  });
};

const getTestimonials = (
  page: number,
  size: number,
  sortBy: TestimonialsSort
): Promise<TestimonialsResponse> => {
  return Promise.resolve({
    records: [
      {
        id: uuidV4(),
        title: "Mind-Expanding Read",
        testimonial:
          "This book opened my mind to new ideas and perspectives. It's a must-read for anyone seeking inspiration and personal growth.",

        rating: 4.5,
        createdAt: new Date(),
        resourceId: uuidV4(),
        userId: "clwvoyid10000qx4juwq9sngz",
      },
      {
        id: uuidV4(),
        title: "Consistently Insightful",
        testimonial:
          "I've been a subscriber to this magazine for years, and it never fails to deliver insightful articles and thought-provoking content. Highly recommended!",

        rating: 3.2,
        createdAt: new Date(),
        resourceId: uuidV4(),
        userId: "clwvpgfcd0001qx4j4e0182s5",
      },
      {
        id: uuidV4(),
        title: "Invaluable Educational Resources",
        testimonial:
          "The educational resources provided by this platform are invaluable. They make learning enjoyable and accessible for students of all ages.",

        rating: 4.3,
        createdAt: new Date(),
        resourceId: uuidV4(),
        userId: "clwvpgfcd0001qx4j4e0182s5",
      },
      {
        id: uuidV4(),
        title: "Hidden Gem",
        testimonial:
          "I stumbled upon this book by chance, and it turned out to be a hidden gem. It's now a staple on my bookshelf, and I recommend it to everyone.",

        rating: 2.1,
        createdAt: new Date(),
        resourceId: uuidV4(),
        userId: "clwvpgfcd0001qx4j4e0182s5",
      },
      {
        id: uuidV4(),
        title: "Engaging Learning Experience",
        testimonial:
          "As a teacher, I rely on these educational materials to supplement my curriculum. They engage my students and enhance their learning experience.",

        rating: 1,
        createdAt: new Date(),
        resourceId: uuidV4(),
        userId: "clwvoyid10000qx4juwq9sngz",
      },
      {
        id: uuidV4(),
        title: "Diverse and Informative",
        testimonial:
          "This magazine covers a wide range of topics, making it suitable for readers with diverse interests. It's my go-to source for staying informed and entertained.",

        rating: 3.4,
        createdAt: new Date(),
        resourceId: uuidV4(),
        userId: "clwvpgfcd0001qx4j4e0182s5",
      },
      {
        id: uuidV4(),
        title: "Rave Reviews",
        testimonial:
          "I purchased this book as a gift for a friend, and they couldn't stop raving about it. It's rare to find a book that resonates with people on such a deep level.",

        rating: 2.2,
        createdAt: new Date(),
        resourceId: uuidV4(),
        userId: "clwvpgfcd0001qx4j4e0182s5",
      },
      {
        id: uuidV4(),
        title: "Professional Development",
        testimonial:
          "The educational resources provided by this platform have been instrumental in my professional development. They've helped me acquire new skills and advance in my career.",

        rating: 4.1,
        createdAt: new Date(),
        resourceId: uuidV4(),
        userId: "clwvpgfcd0001qx4j4e0182s5",
      },
      {
        id: uuidV4(),
        title: "Exceeds Expectations",
        testimonial:
          "I've subscribed to this magazine for years, and it continues to exceed my expectations. It's informative, engaging, and always ahead of the curve.",

        rating: 3.2,
        createdAt: new Date(),
        resourceId: uuidV4(),
        userId: "clwvoyid10000qx4juwq9sngz",
      },
      {
        id: uuidV4(),
        title: "Thought-Provoking Read",
        testimonial:
          "This book challenged my beliefs and forced me to question the status quo. It's a thought-provoking read that will stay with me for years to come.",

        rating: 3.2,
        createdAt: new Date(),
        resourceId: uuidV4(),
        userId: "clwvoyid10000qx4juwq9sngz",
      },
      {
        id: uuidV4(),
        title: "User-Friendly and Comprehensive",
        testimonial:
          "The educational materials provided by this platform are user-friendly and comprehensive. They've helped me excel in my studies and achieve academic success.",

        rating: 1.2,
        createdAt: new Date(),
        resourceId: uuidV4(),
        userId: "clwvpgfcd0001qx4j4e0182s5",
      },
      {
        id: uuidV4(),
        title: "Monthly Ritual",
        testimonial:
          "I stumbled upon this magazine while browsing the bookstore, and I'm so glad I did. It's become a monthly ritual for me to indulge in its insightful articles.",

        rating: 5,
        createdAt: new Date(),
        resourceId: uuidV4(),
        userId: "clwvpgfcd0001qx4j4e0182s5",
      },
      {
        id: uuidV4(),
        title: "Life-Changing Recommendation",
        testimonial:
          "I've recommended this book to all my friends and family members. It's rare to find a book that has the power to inspire and transform lives.",

        rating: 4,
        createdAt: new Date(),
        resourceId: uuidV4(),
        userId: "clwvoyid10000qx4juwq9sngz",
      },
      {
        id: uuidV4(),
        title: "Top-Notch Resources",
        testimonial:
          "The educational resources offered by this platform are top-notch. They're updated regularly to reflect the latest trends and developments in the field.",

        rating: 4.5,
        createdAt: new Date(),
        resourceId: uuidV4(),
        userId: "clwvpgfcd0001qx4j4e0182s5",
      },
    ],
    total: 100,
  });
};

export { GET };
