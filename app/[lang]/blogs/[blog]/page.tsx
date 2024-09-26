// BlogDetail.tsx

import React from "react";
import MainSection from "@/components/Blog/Nav/MainSection";
import { getBlogCategories, getBlogsDetail, getHeaderFooter } from "@/utils/query";
import Footer from "@/components/Footer";
import { PortableText } from "@portabletext/react";
import { serverComponents } from "@/components/Blog/portableTextComponents";
import ClientSideLinks from "@/components/Blog/ClientSideLinks";
import formatDate from "@/utils/function";

const BlogDetail: React.FC<any> = async ({ params }) => {
  const categories = await getBlogCategories();
  const data = await getBlogsDetail(params.blog);
  const navs = await getHeaderFooter();
  return (
    <>
      <section className="text-[#232523]">
        <MainSection heading={categories?.blogPage} searchParams="" header={navs?.header} categories={categories.categories} />
        <div className="mx-3 lg:mx-56 2xl:mx-[450px] min-h-screen">
          {data?.blogs?.map((blog: any) => (
            <React.Fragment key={blog._id}>
              <h1 className="text-[#232523] font-bold text-2xl lg:text-5xl py-3 ">{blog?.title}</h1>
              <p className="pb-8">{formatDate(blog?.publishedAt)}</p>
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
