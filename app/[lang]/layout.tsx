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
  title: {
    template: "Periodiq | ",
    default: "Periodiq.com", // This will be the fallback title
  },
  description: "periodiq.com",
  metadataBase: new URL("periodiq.co"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "periodiq.co",
    siteName: "Periodiq",
    title: "Periodiq",
    description: "Periodiq",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Site Name",
      },
    ],
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
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
