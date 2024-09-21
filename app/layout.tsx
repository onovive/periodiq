import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { i18n } from "./i18n-config";
import { Manrope, Prata } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ weight: ["200", "400", "700"], style: ["normal"], subsets: ["latin"] });
// const prata = Prata({ weight: ["400"], style: ["normal"], subsets: ["latin"] });
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
export const metadata: Metadata = {
  title: "PeriodiQ",
  description: "PeriodiQ",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={params.lang}>
      <body className={`${manrope.className}`}>{children}</body>
    </html>
  );
}

//
