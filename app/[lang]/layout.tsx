import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { i18n } from "../i18n-config";
import { Manrope } from "next/font/google";
import { Suspense } from "react";
import localFont from "next/font/local";
// const manrope = Manrope({
//   weight: ["200", "400", "700"],
//   style: ["normal"],
//   subsets: ["latin"],
// });

const ttfirsNeue = localFont({
  src: [
    {
      path: "../fonts/tt_firs_neue/TT Firs Neue Trial Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/tt_firs_neue/TT Firs Neue Trial Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-tt-firs-neue",
});
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  // const globalSEO = await getGlobalSEO(params.lang);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://periodiq.co";
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "PeriodiQ",
      template: "%s | PeriodiQ",
    },
    description: "PeriodiQ | Home",
    openGraph: {
      type: "website",
      siteName: "PeriodiQ",
      images: [
        {
          url: "/en/banner.jpg",
          width: 1200,
          height: 630,
          alt: "PeriodiQ",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `${baseUrl}/${params.lang}`,
      languages: {
        "en-US": `${baseUrl}/en`,
        "it-IT": `${baseUrl}/it`,
      },
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
      <body className={ttfirsNeue.className}>
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
