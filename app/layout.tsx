"use client";

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
          <AbilityProvider>
            <Toaster position="top-center" reverseOrder={false} />
            {children}
          </AbilityProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
