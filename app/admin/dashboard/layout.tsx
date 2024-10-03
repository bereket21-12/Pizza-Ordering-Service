'use client'
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>Dashboard Header</header>
        <main>{children}</main>
        <footer>Dashboard Footer</footer>
      </body>
    </html>
  );
}
