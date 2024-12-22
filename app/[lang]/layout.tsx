import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { i18n } from "../i18n-config";
import { Manrope, Prata } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
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
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />}
      <body className={`${manrope.className}`}>{children}</body>
    </html>
  );
}

//
