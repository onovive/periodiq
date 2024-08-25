import React from "react";
import Content from "@/components/Blog/Card/CardSection";
import MainSection from "@/components/Blog/Nav/MainSection";
import { getBlogs } from "@/utils/query";

const page = async () => {
  const data = await getBlogs();
  // console.log(blogs);
  return (
    <main>
      <MainSection categories={data.categories} />
      <Content data={data} />
    </main>
  );
};

export default page;
