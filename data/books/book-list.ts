const books: Resource[] = [
  {
    id: "1",
    shortDescription: "A comprehensive guide to modern web development.",
    imageUrl: "https://example.com/images/resource1.jpg",
    edition: "2nd",
    category: {
      id: "c1",
      name: "Technology",
      createdAt: new Date("2023-01-01T00:00:00Z"),
    },
    detail: {
      id: "d1",
      isbn: "978-3-16-148410-0",
      paragraphs: [
        "Introduction to Web Development",
        "Advanced JavaScript Techniques",
      ],
      authors: ["Jane Doe", "John Smith"],
      publicationYear: 2022,
      edition: "2nd",
      testimonials: [
        {
          id: "t1",
          userId: "u1",
          resourceId: "1",
          rating: 5,
          title: "Excellent Resource",
          testimonial:
            "This book helped me a lot in my web development journey.",
          createdAt: new Date("2023-03-01T00:00:00Z"),
        },
      ],
    },
    type: {
      type: ResourceTypes.BOOK,
      maxLoanDays: 14,
    },
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-03-01T00:00:00Z",
  },
  {
    id: "2",
    shortDescription: "Latest issue of the popular tech magazine.",
    imageUrl: "https://example.com/images/resource2.jpg",
    edition: "May 2023",
    category: {
      id: "c1",
      name: "Technology",
      createdAt: new Date("2023-01-01T00:00:00Z"),
    },
    detail: {
      id: "d2",
      paragraphs: ["Cover Story: The Future of AI", "Gadget Reviews"],
      authors: ["Tech Team"],
      publicationYear: 2023,
      edition: "May 2023",
      testimonials: [
        {
          id: "t2",
          userId: "u2",
          resourceId: "2",
          rating: 4,
          title: "Informative Read",
          testimonial: "Great insights into the latest tech trends.",
          createdAt: new Date("2023-04-15T00:00:00Z"),
        },
      ],
    },
    type: {
      type: ResourceTypes.MAGAZINE,
      maxLoanDays: 7,
    },
    createdAt: "2023-04-01T00:00:00Z",
    updatedAt: "2023-04-15T00:00:00Z",
  },
  {
    id: "3",
    shortDescription: "A thrilling mystery novel.",
    imageUrl: "https://example.com/images/resource3.jpg",
    edition: "1st",
    category: {
      id: "c2",
      name: "Fiction",
      createdAt: new Date("2023-01-02T00:00:00Z"),
    },
    detail: {
      id: "d3",
      isbn: "978-3-16-148410-1",
      paragraphs: [
        "Chapter 1: The Disappearance",
        "Chapter 2: The Investigation",
      ],
      authors: ["Agatha Christie"],
      publicationYear: 2020,
      edition: "1st",
      testimonials: [
        {
          id: "t3",
          userId: "u3",
          resourceId: "3",
          rating: 5,
          title: "Gripping Story",
          testimonial: "Couldn't put it down until the end.",
          createdAt: new Date("2023-02-20T00:00:00Z"),
        },
      ],
    },
    type: {
      type: ResourceTypes.BOOK,
      maxLoanDays: 14,
    },
    createdAt: "2023-02-01T00:00:00Z",
    updatedAt: "2023-02-20T00:00:00Z",
  },
  {
    id: "4",
    shortDescription: "An educational documentary on climate change.",
    imageUrl: "https://example.com/images/resource4.jpg",
    edition: "1st",
    category: {
      id: "c3",
      name: "Science",
      createdAt: new Date("2023-01-03T00:00:00Z"),
    },
    detail: {
      id: "d4",
      paragraphs: ["Introduction to Climate Change", "Impact on Ecosystems"],
      authors: ["National Geographic"],
      publicationYear: 2021,
      edition: "1st",
      testimonials: [
        {
          id: "t4",
          userId: "u4",
          resourceId: "4",
          rating: 4,
          title: "Eye-Opening",
          testimonial:
            "A must-watch for anyone interested in environmental issues.",
          createdAt: new Date("2023-05-10T00:00:00Z"),
        },
      ],
    },
    type: {
      type: ResourceTypes.DVD,
      maxLoanDays: 7,
    },
    createdAt: "2023-03-01T00:00:00Z",
    updatedAt: "2023-05-10T00:00:00Z",
  },
  {
    id: "5",
    shortDescription: "Comprehensive encyclopedia of world history.",
    imageUrl: "https://example.com/images/resource5.jpg",
    edition: "10th",
    category: {
      id: "c4",
      name: "History",
      createdAt: new Date("2023-01-04T00:00:00Z"),
    },
    detail: {
      id: "d5",
      isbn: "978-3-16-148410-2",
      paragraphs: ["Ancient Civilizations", "Middle Ages", "Modern Era"],
      authors: ["Historians Collective"],
      publicationYear: 2019,
      edition: "10th",
      testimonials: [
        {
          id: "t5",
          userId: "u5",
          resourceId: "5",
          rating: 5,
          title: "Extremely Detailed",
          testimonial: "Covers a vast amount of historical knowledge.",
          createdAt: new Date("2023-01-15T00:00:00Z"),
        },
      ],
    },
    type: {
      type: ResourceTypes.ENCYCLOPEDIA,
      maxLoanDays: 21,
    },
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-15T00:00:00Z",
  },
  {
    id: "6",
    shortDescription: "Beginner's guide to learning Spanish.",
    imageUrl: "https://example.com/images/resource6.jpg",
    edition: "3rd",
    category: {
      id: "c5",
      name: "Language",
      createdAt: new Date("2023-01-05T00:00:00Z"),
    },
    detail: {
      id: "d6",
      isbn: "978-3-16-148410-3",
      paragraphs: ["Basic Grammar", "Common Phrases", "Practice Exercises"],
      authors: ["Maria Gonzalez"],
      publicationYear: 2021,
      edition: "3rd",
      testimonials: [
        {
          id: "t6",
          userId: "u6",
          resourceId: "6",
          rating: 4,
          title: "Very Helpful",
          testimonial: "Great resource for beginners.",
          createdAt: new Date("2023-02-25T00:00:00Z"),
        },
      ],
    },
    type: {
      type: ResourceTypes.BOOK,
      maxLoanDays: 14,
    },
    createdAt: "2023-01-10T00:00:00Z",
    updatedAt: "2023-02-25T00:00:00Z",
  },
  {
    id: "7",
    shortDescription: "Classic comic book series featuring superheroes.",
    imageUrl: "https://example.com/images/resource7.jpg",
    edition: "1st",
    category: {
      id: "c6",
      name: "Comics",
      createdAt: new Date("2023-01-06T00:00:00Z"),
    },
    detail: {
      id: "d7",
      isbn: "978-3-16-148410-4",
      paragraphs: ["Issue #1: The Beginning", "Issue #2: The Rise of the Hero"],
      authors: ["Stan Lee"],
      publicationYear: 2018,
      edition: "1st",
      testimonials: [
        {
          id: "t7",
          userId: "u7",
          resourceId: "7",
          rating: 5,
          title: "Nostalgic",
          testimonial: "Brings back memories of my childhood.",
          createdAt: new Date("2023-03-30T00:00:00Z"),
        },
      ],
    },
    type: {
      type: ResourceTypes.COMICS,
      maxLoanDays: 7,
    },
    createdAt: "2023-04-01T00:00:00Z",
    updatedAt: "2023-04-15T00:00:00Z",
  },
];
