import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "your-email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        try {
          // Fetch user with roles and permissions
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
            select: {
              id: true,
              email: true,
              name: true,
              password: true,
              restaurantId: true,
              roles: {
                select: {
                  role: {
                    select: {
                      name: true,
                      permissions: {
                        select: {
                          permission: {
                            select: {
                              action: true,
                              subject: true,
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          });

          // If user is not found, return null
          if (!user) {
            console.log("User not found");
            return null;
          }

          // Check user password
          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!isPasswordValid) {
            console.log("Invalid password");
            return null;
          }

          // Map roles and permissions
          const rolesWithPermissions = user.roles.map((userRole) => ({
            role: {
              name: userRole.role.name,
              permissions: userRole.role.permissions.map((perm) => ({
                permission: {
                  action: perm.permission.action,
                  subject: perm.permission.subject,
                },
              })),
            },
          }));

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            roles: rolesWithPermissions,
            restaurantId: user.restaurantId,
          };
        } catch (error) {
          console.error("Error in authorize function:", error);
          return null;
        }
      },
    }),
  ],
  pages: { signIn: "/" },
  session: { strategy: "jwt", updateAge: 0 },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.roles = user.roles;
        token.restaurantId = user.restaurantId;
      }
      return token;
    },
    async session({ session, token }) {
      if (!token.id) return session;

      session.user.id = Number(token.id);
      session.user.email = token.email ?? "";
      session.user.roles =
        (token.roles as {
          role: {
            name: string;
            permissions: {
              permission: {
                action: string;
                subject: string;
              };
            }[];
          };
        }[]) ?? [];
      session.user.restaurantId = token.restaurantId as number | null;

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
