import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pizza order service App",
  description: "This is web-based pizza ordering service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
