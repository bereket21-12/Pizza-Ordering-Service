import type { Metadata } from "next";
import Sidebar from "@/components/Dashboard/Sidebar";

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
    // <Can I="create" a="Pizza" ability={ability}>
    <main style={{ backgroundColor: "whitesmoke" }}>
      <Sidebar>
        {children}
        </Sidebar>
     
    </main>
    // </Can>
  );
}
