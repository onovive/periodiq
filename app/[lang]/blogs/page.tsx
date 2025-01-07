import React from "react";
import Content from "@/components/Blog/Card/CardSection";
import MainSection from "@/components/Blog/Nav/MainSection";
import { getBlogCategories, getBlogs, getHeaderFooter } from "@/utils/query";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";
import GoogleAnalyticsWrapper from "@/components/GoogleAnalyticsWrapper";
// const { lang } = useParams();
// app/[lang]/blogs/page.tsx

import { Metadata } from "next";

interface Props {
  params: {
    lang: string;
  };
  searchParams: any;
}
export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const categories = await getBlogCategories();
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
const page = async ({ params, searchParams }: { params: any; searchParams: any }) => {
  // console.log("lang in blogs", lang);
  console.log("search param", params.lang);
  const category = searchParams.category ? searchParams.category : "";
  console.log(searchParams);
  const blogs = await getBlogs(category === "All" ? "" : category, params.lang);
  const categories = await getBlogCategories();
  const navs = await getHeaderFooter();

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

export default page;
