import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio - Sirawit Kaosong",
  description: "UX/UI Designer & Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-gray-100 bg-[#1a1a2e]">{children}</body>
    </html>
  );
}
