import { LoanTestimonial } from "../loan/Testimonial";

export interface ResourceDetail {
  id: number;
  isbn?: string;
  paragraphs: string[];
  author: string;
  publicationYear: number;
  testimonials?: LoanTestimonial[];
}
