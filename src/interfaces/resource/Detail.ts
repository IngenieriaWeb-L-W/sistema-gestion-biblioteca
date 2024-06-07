import { LoanTestimonial } from "../loan/Testimonial";

export interface ResourceDetail {
  id: string;
  isbn?: string;
  paragraphs: string[];
  authors: string[];
  publicationYear: number;
  testimonials: LoanTestimonial[];
}
