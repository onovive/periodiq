import React from "react";
import Card from "@/components/Glossary/Card/Card";
import Hero from "@/components/Glossary/Hero/Hero";
import Footer from "@/components/Footer";
import { getGlossaryPage, getHeaderFooter } from "@/utils/query";
import GoogleAnalyticsWrapper from "@/components/GoogleAnalyticsWrapper";
import { Metadata } from "next";

interface Props {
  params: Promise<{
    lang: string;
  }>;
  searchParams: Promise<any>;
}
export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { lang } = await params;
  const glossaryPage = await getGlossaryPage(lang);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://periodiq.co";
  return {
    title: glossaryPage?.seo?.title || "Glossary",
    description: glossaryPage?.seo?.description,
    alternates: {
      canonical: `${baseUrl}/${lang}/Glossary`,
    },
    openGraph: {
      title: glossaryPage?.seo?.title,
      description: glossaryPage?.seo?.description,
      type: "website",
      images: glossaryPage?.seo?.image
        ? [
            {
              url: glossaryPage.seo.image,
              width: 1200,
              height: 630,
              alt: glossaryPage?.seo?.title,
            },
          ]
        : [],
      locale: lang,
    },
    twitter: {
      card: "summary_large_image",
      title: glossaryPage?.seo?.title,
      description: glossaryPage?.seo?.description,
      images: glossaryPage?.seo?.image ? [glossaryPage.seo.image] : [],
    },
  };
}
const Page = async ({ params, searchParams }: { params: Promise<{ lang: string }>; searchParams: Promise<any> }) => {
  const { lang } = await params;
  const resolvedSearchParams = await searchParams;
  const glossary = resolvedSearchParams.glossary ? resolvedSearchParams.glossary : "";
  const navs = await getHeaderFooter();
  const glossaryPage = await getGlossaryPage(lang);
  return (
    <>
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && <GoogleAnalyticsWrapper GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />}
      <div>
        <Hero header={navs?.header} heading={glossaryPage} />
        <Card lang={lang} glossary={glossary} />
        <div className="mt-8 sm:mt-20">
          <Footer footer={navs?.header} />
        </div>
      </div>
    </>
  );
};

export default Page;
