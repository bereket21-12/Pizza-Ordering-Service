'use client'

import "./globals.css";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { AbilityProvider } from "@/provider/AbilityContext"; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
        <AbilityProvider >
          <Toaster position="top-center" reverseOrder={false} />
          {children}
          </AbilityProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

// 'use client'
// import type { Metadata } from "next";
// import "./globals.css";
// import Navbar from "@/components/common/navebar";
// import { Toaster } from "react-hot-toast";
// import { SessionProvider, useSession } from "next-auth/react";
// import { AbilityProvider } from "@/provider/AbilityContext";
// import { defineDynamicAbilitiesFor } from "@/lib/ability";
// import { useMemo, useEffect, useState } from "react";
// import { Ability } from '@casl/ability'; // Ensure you have the correct import for Ability

// const metadata: Metadata = {
//   title: "Pizza order service App",
//   description: "This is web based pizza ordering service.",
// };

// function AbilityProviderWrapper({ children }: { children: React.ReactNode }) {
//   const { data: session, status } = useSession();

  
//   const [abilities, setAbilities] = useState<Ability | null>(null);

//   useEffect(() => {
//     if (status === "authenticated") {
//       defineDynamicAbilitiesFor(session).then(setAbilities);
//     }
//   }, [session, status]);

//   if (status === "loading" || !abilities) {
//     return <div>Loading...</div>; // or a loading spinner
//   }

//   return (
//     <AbilityProvider abilities={abilities}>
//       {children}
//     </AbilityProvider>
//   );
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         <SessionProvider>
//           <AbilityProviderWrapper>
//             {children}
//           </AbilityProviderWrapper>
//           <Toaster position="top-center" reverseOrder={false} />
//         </SessionProvider>
//       </body>
//     </html>
//   );
// }
