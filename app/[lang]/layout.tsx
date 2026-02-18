import type { Metadata } from "next";
import { i18n } from "../i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
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
      canonical: `${baseUrl}/${lang}`,
      languages: {
        "en-US": `${baseUrl}/en`,
        "it-IT": `${baseUrl}/it`,
      },
    },
  };
}

export default function LangLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
