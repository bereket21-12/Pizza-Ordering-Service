import type { Metadata } from "next";
import Navbar from "@/components/common/navebar";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "Pizza order service App",
  description: "This is web based pizza ordering service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box sx={{ backgroundColor: "#FFF8F1" }}>
      {<Navbar />}
      {children}
    </Box>
  );
}
