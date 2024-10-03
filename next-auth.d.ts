import { DefaultUser } from "next-auth";

// Extend the DefaultUser type to include custom fields
declare module "next-auth" {
  interface User extends DefaultUser {
    id: number;
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

  interface Session {
    user: {
      id: number;
      email: string;
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
}

declare module "next-auth/jwt" {
  interface JWT {
    id: number;
    roles: string[];
    restaurantId: number | null;
  }
}
