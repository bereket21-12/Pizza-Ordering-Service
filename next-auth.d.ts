import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      email: string;
      name?: string | null;
      roles: {
        role: {
          name: string;
          permissions: {
            permission: {
              action: string;
              subject: string;
            };
          }[];
        };
      }[];
      restaurantId: number | null;
    };
  }

  interface User {
    id: number;
    email: string;
    name?: string | null;
    roles: {
      role: {
        name: string;
        permissions: {
          permission: {
            action: string;
            subject: string;
          };
        }[];
      };
    }[];
    restaurantId: number | null;
  }
}
