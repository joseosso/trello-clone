import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trello Clone",
  description: "A Trello clone built with Next.js and Prisma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
