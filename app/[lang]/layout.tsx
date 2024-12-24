import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { i18n } from "../i18n-config";
import { Manrope } from "next/font/google";
import { Suspense } from "react";

const manrope = Manrope({
  weight: ["200", "400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

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
      <body className={`${manrope.className}`}>
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          }
        >
          {children}
        </Suspense>
      </body>
    </html>
  );
}
