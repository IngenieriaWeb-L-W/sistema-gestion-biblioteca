import { UserPublicInfo } from "@/hooks/use-user-public-info";
import { Resource } from "../resource/Resource";

export interface LoanTestimonial {
  user: UserPublicInfo;
  resource?: Resource;
  rating: number; // 1 to 5
  title: string;
  testimonial?: string;
  createdAt: Date;
}
