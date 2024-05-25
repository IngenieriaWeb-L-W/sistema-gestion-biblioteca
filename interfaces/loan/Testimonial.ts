export interface LoanTestimonial {
  id: string;
  userId: string;
  resourceId: string;
  rating: number; // 1 to 5
  title: string;
  testimonial?: string;
  createdAt: Date;
}
