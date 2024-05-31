// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    id_token?: string;
    user: {
      image: string;
      name: string;
      email: string;
    };
  }
}