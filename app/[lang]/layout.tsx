import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { i18n } from "../i18n-config";
import { Manrope } from "next/font/google";
import { Suspense } from "react";
import { getGlobalSEO } from "@/utils/query";

const manrope = Manrope({
  weight: ["200", "400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const globalSEO = await getGlobalSEO(params.lang);
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://periodiq.com"),
    title: {
      default: globalSEO?.defaultTitle || "PeriodiQ",
      template: globalSEO?.titleTemplate || "%s | PeriodiQ",
    },
    description: globalSEO?.defaultDescription || "PeriodiQ - Default Description",
    openGraph: {
      type: "website",
      siteName: globalSEO?.siteName || "PeriodiQ",
      images: globalSEO?.defaultOGImage
        ? [
            {
              url: globalSEO.defaultOGImage,
              width: 1200,
              height: 630,
              alt: globalSEO?.siteName || "PeriodiQ",
            },
          ]
        : [],
    },
  };
}

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
