import React from "react";
import Content from "@/components/Blog/Card/CardSection";
import MainSection from "@/components/Blog/Nav/MainSection";
import { getBlogCategories, getBlogs, getHeaderFooter } from "@/utils/query";
import Footer from "@/components/Footer";
import GoogleAnalyticsWrapper from "@/components/GoogleAnalyticsWrapper";
import { Metadata } from "next";

interface Props {
  params: {
    lang: string;
  };
  searchParams: any;
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const categories = await getBlogCategories(params.lang);

  return {
    title: categories?.blogPage?.seo?.title || "Blogs",
    description: categories?.blogPage?.seo?.description,
    openGraph: {
      title: categories?.blogPage?.seo?.title,
      description: categories?.blogPage?.seo?.description,
      type: "website",
      images: categories?.blogPage?.seo?.image
        ? [
            {
              url: categories.blogPage.seo.image,
              width: 1200,
              height: 630,
              alt: categories?.blogPage?.seo?.title,
            },
          ]
        : [],
      locale: params.lang,
    },
    twitter: {
      card: "summary_large_image",
      title: categories?.blogPage?.seo?.title,
      description: categories?.blogPage?.seo?.description,
      images: categories?.blogPage?.seo?.image ? [categories.blogPage.seo.image] : [],
    },
  };
}

const Page = async ({ params, searchParams }: Props) => {
  const category = searchParams.category ? searchParams.category : "";
  const blogs = await getBlogs(category === "All" ? "" : category, params.lang);
  const categories = await getBlogCategories(params.lang);
  const navs = await getHeaderFooter(); // Assuming getHeaderFooter also needs language parameter
  return (
    <>
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && <GoogleAnalyticsWrapper GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />}
      <main>
        <MainSection heading={categories?.blogPage} header={navs?.header} searchParams={searchParams} categories={categories.categories} />
        <Content data={blogs} lang={params.lang} />
        <div className="mt-8 sm:mt-20">
          <Footer footer={navs?.header} />
        </div>
      </main>
    </>
  );
};

export default Page;
