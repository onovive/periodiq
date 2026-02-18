import Image from "next/image";
import client from "../../client";
import toast, { Toaster } from "react-hot-toast";
import Banner from "@/components/Banner";
import Solutions from "@/components/Solutions";
import Offer from "@/components/Offer";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Section from "@/components/SecondSection/index";
import CardSection from "@/components/BlogCard/CardSection";
import { getHeaderFooter, getHomePage, getLatestBlogs } from "@/utils/query";
import Games from "@/components/Card/Games";
import { Suspense } from "react";
import GoogleAnalyticsWrapper from "@/components/GoogleAnalyticsWrapper";
import { Metadata } from "next";
import Faq from "@/components/Faq";
import TestimonialSection from "@/components/Testimonial";

interface Props {
  params: Promise<{
    lang: string;
  }>;
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const pageData = await getHomePage(lang);
  return {
    title: pageData?.seo?.title || "--",
    description: pageData?.seo?.description,
    openGraph: {
      title: pageData?.seo?.title,
      description: pageData?.seo?.description,
      type: "website",
      images: pageData?.seo?.image
        ? [
            {
              url: pageData?.seo?.image,
              width: 1200,
              height: 630,
              alt: pageData?.seo?.title,
            },
          ]
        : [],
      locale: lang,
    },
    twitter: {
      card: "summary_large_image",
      title: pageData?.seo?.title,
      description: pageData?.seo?.description,
      images: pageData?.seo?.image ? [pageData.seo.image] : [],
    },
  };
}
export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const pageData = await getHomePage(lang);
  const latestBlogs = await getLatestBlogs(lang);
  const navs = await getHeaderFooter();

  return (
    <>
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && <GoogleAnalyticsWrapper GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />}
      <main className="relative">
        {pageData && (
          <>
            <Toaster />
            <Banner lang={lang} header={navs?.header} data={pageData?.banner} />
            <Section data={pageData?.benefits} />
            <Games lang={lang} data={pageData?.gamesSection} />
            <Contact data={pageData?.contactSection} />
            <TestimonialSection data={pageData?.testimonialSection} />
            <CardSection lang={lang} data={latestBlogs} blogSec={pageData?.blogsSection} />
            <Faq data={pageData?.faqSection} />
            <Footer footer={navs?.header} />
          </>
        )}
      </main>
    </>
  );
}
