import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { allFont } from "@/config/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Copa América 2024",
  description: "Información de la Copa América 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">
      <body className={allFont.className}>{children}</body>
    </html>
    </>
  );
}
