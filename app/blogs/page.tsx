import React from "react";
import Content from "@/components/Blog/Card/CardSection";
import MainSection from "@/components/Blog/Nav/MainSection";
import { getBlogCategories, getBlogs } from "@/utils/query";
import Footer from "@/components/Footer";

const page = async ({ searchParams }: { searchParams: any }) => {
  console.log("params", searchParams);
  const category = searchParams.category ? searchParams.category : "";
  const blogs = await getBlogs(category === "All" ? "" : category);
  const categories = await getBlogCategories();
  // console.log(blogs);
  // console.log(categories);
  return (
    <main>
      <MainSection searchParams={searchParams} categories={categories.categories} />
      <Content data={blogs} />
      <div className="mt-8 sm:mt-20">
        <Footer />
      </div>
    </main>
  );
};

export default page;
