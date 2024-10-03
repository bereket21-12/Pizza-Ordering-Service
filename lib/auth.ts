// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import prisma from "@/lib/prisma";
// import bcrypt from "bcryptjs";
// import { NextAuthOptions } from "next-auth";

// const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "text",
//           placeholder: "your-email@example.com",
//         },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (!credentials) return null;

//         // Fetch user with roles and permissions
//         const user = await prisma.user.findUnique({
//           where: { email: credentials.email },
//           select: {
//             id: true,
//             email: true,
//             name: true,
//             password: true,
//             restaurantId: true,
//             roles: {
//               select: {
//                 role: {
//                   select: {
//                     name: true,
//                   },
//                 },
//               },
//             },
//           },
//         });

//         // Check user password and map roles and permissions
//         if (
//           user &&
//           (await bcrypt.compare(credentials.password, user.password))
//         ) {
//           const roles = user.roles.map((userRole: any) => userRole.role.name);

//           return {
//             id: user.id,
//             email: user.email,
//             name: user.name,
//             roles: roles, // Include roles here
//             restaurantId: user.restaurantId,
//           } as any; // Use `any` or the correct type assertion
//         }
//         return null;
//       },
//     }),
//   ],
//   pages: { signIn: "/" },
//   session: { strategy: "jwt", updateAge: 0 },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = Number(user.id);
//         token.email = user.email;
//         token.roles = user.roles;
//         token.restaurantId = user.restaurantId;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.user.id = Number(token.id);
//       session.user.email = token.email ?? "";
//       session.user.roles = token.roles as string[];
//       session.user.restaurantId = token.restaurantId as number | null;

//       return session;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
