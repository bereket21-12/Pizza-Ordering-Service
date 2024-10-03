import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      email: string;
      roles: string[]; // Add roles as an array of strings
      restaurantId: number | null; // Add restaurantId as nullable number
    };
  }

  interface User {
    id: number;
    email: string;
    name?: string | null;
    roles: string[]; // Add roles as an array of strings
    restaurantId: number | null; // Add restaurantId as nullable number
  }
}
