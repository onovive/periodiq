import React from "react";
import Content from "@/components/Blog/Card/CardSection";
import MainSection from "@/components/Blog/Nav/MainSection";
import { getBlogCategories, getBlogs, getHeaderFooter } from "@/utils/query";
import Footer from "@/components/Footer";
import GoogleAnalyticsWrapper from "@/components/GoogleAnalyticsWrapper";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: {
    lang: string;
  };
  searchParams: any;
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  try {
    const categories = await getBlogCategories(params.lang);

    if (!categories?.blogPage) {
      return {
        title: "Blogs",
        description: "Blog posts",
      };
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://periodiq.co";
    return {
      title: categories?.blogPage?.seo?.title || "Blogs",
      description: categories?.blogPage?.seo?.description || "",
      alternates: {
        canonical: `${baseUrl}/${params.lang}/blogs`,
      },
      openGraph: categories?.blogPage?.seo
        ? {
            title: categories.blogPage.seo.title || "Blogs",
            description: categories.blogPage.seo.description || "",
            type: "website",
            images: categories.blogPage.seo.image
              ? [
                  {
                    url: categories.blogPage.seo.image,
                    width: 1200,
                    height: 630,
                    alt: categories.blogPage.seo.title || "Blogs",
                  },
                ]
              : [],
            locale: params.lang,
          }
        : {},
      twitter: categories?.blogPage?.seo
        ? {
            card: "summary_large_image",
            title: categories.blogPage.seo.title || "Blogs",
            description: categories.blogPage.seo.description || "",
            images: categories.blogPage.seo.image ? [categories.blogPage.seo.image] : [],
          }
        : {},
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blogs",
      description: "Blog posts",
    };
  }
}

const Page = async ({ params, searchParams }: Props) => {
  try {
    if (!params.lang) {
      return notFound();
    }

    const category = searchParams?.category === "All" ? "" : searchParams?.category || "";

    const [blogs, categories, navs] = await Promise.all([getBlogs(category, params.lang).catch(() => null), getBlogCategories(params.lang).catch(() => null), getHeaderFooter().catch(() => null)]);

    if (!blogs || !categories || !navs) {
      console.error("Failed to fetch required data");
      return notFound();
    }

    return (
      <>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && <GoogleAnalyticsWrapper GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />}
        <main>
          <MainSection heading={categories?.blogPage || null} header={navs?.header || null} searchParams={searchParams} categories={categories?.categories || []} />
          <Content data={blogs || []} lang={params.lang} />
          <div className="mt-8 sm:mt-20">
            <Footer footer={navs?.header || null} />
          </div>
        </main>
      </>
    );
  } catch (error) {
    console.error("Error rendering blog page:", error);
    return notFound();
  }
};

export default Page;
