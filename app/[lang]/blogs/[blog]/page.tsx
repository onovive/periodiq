// BlogDetail.tsx
import React from "react";
import { Metadata } from "next";
import MainSection from "@/components/Blog/Nav/MainSection";
import { getBlogCategories, getBlogsDetail, getHeaderFooter } from "@/utils/query";
import Footer from "@/components/Footer";
import { PortableText } from "@portabletext/react";
import { serverComponents } from "@/components/Blog/portableTextComponents";
import ClientSideLinks from "@/components/Blog/ClientSideLinks";
import GlossaryDate from "@/components/Glossary/glossaryDate";
import { notFound } from "next/navigation";

interface Props {
  params: {
    blog: string;
    lang: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getBlogsDetail(params.blog);
  const blog = data?.blogs?.[0]; // Get the first blog

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog could not be found.",
    };
  }

  // Extract plain text from portable text for description if needed
  const plainTextBody = blog?.description || "Read our latest blog post";
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://periodiq.co";
  return {
    title: blog.title,
    description: blog.description,
    alternates: {
      canonical: `${baseUrl}/${params.lang}/blogs/${params.blog}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      images: blog.mainImage
        ? [
            {
              url: blog.mainImage,
              width: 1200,
              height: 630,
              alt: blog.title,
            },
          ]
        : [],
      locale: blog.language || params.lang,
      publishedTime: blog.publishedAt,
      modifiedTime: blog._updatedAt,
      siteName: "PeriodiQ",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: blog.mainImage ? [blog.mainImage] : [],
    },
  };
}

const BlogDetail: React.FC<Props> = async ({ params }) => {
  const categories = await getBlogCategories();
  const data = await getBlogsDetail(params.blog);

  if (!data?.blogs || data.blogs.length === 0) {
    notFound();
  }

  const navs = await getHeaderFooter();

  return (
    <>
      <section className="text-[#232523]">
        <MainSection heading={categories?.blogPage} searchParams="" header={navs?.header} categories={categories.categories} />
        <div className="mx-3 lg:mx-52 2xl:w-[1000px] 2xl:mx-auto text-[#232523] min-h-screen">
          {data?.blogs?.map((blog: any) => (
            <React.Fragment key={blog._id}>
              <h1 className="text-[#232523] font-bold text-2xl lg:text-5xl py-3">{blog?.title}</h1>
              <GlossaryDate data={blog?._updatedAt} />
              {/* <p className="pb-8"></p> */}
              <PortableText value={blog?.body} components={serverComponents} />
              <ClientSideLinks />
            </React.Fragment>
          ))}
        </div>
        <div className="mt-8 sm:mt-20">
          <Footer footer={navs?.header} />
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
