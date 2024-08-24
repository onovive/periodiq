import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Manrope, Prata } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ weight: ["200", "400", "700"], style: ["normal"], subsets: ["latin"] });
// const prata = Prata({ weight: ["400"], style: ["normal"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Periodiq",
  description: "Periodiq",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className}`}>{children}</body>
    </html>
  );
}

//
