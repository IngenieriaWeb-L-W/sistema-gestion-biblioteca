import { LoanTestimonial } from "../loan/Testimonial";

export interface ResourceDetail {
  id: string;
  isbn?: string;
  paragraphs: string[];
  author: string;
  publicationYear: number;
  testimonials: LoanTestimonial[];
}
