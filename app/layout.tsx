import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Positivus Landing Page Using - MACoding4U",
  description: "Positivus Landing Page Using Next.js - TailwindCSS - MACoding4U",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
