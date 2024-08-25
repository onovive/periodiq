import React from "react";
import MainSection from "@/components/Blog/Nav/MainSection";
import { getBlogCategories, getBlogsDetail } from "@/utils/query";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { SanityDocument } from "@sanity/client";
// import { urlFor } from "@/sanity"; // Assuming you have this utility for generating image URLs
import styles from "@/styles/Blog.module.css"; // Adjust the path to your CSS module

// Define the type for the blog category
interface BlogCategory {
  title: string;
  _id: string;
}

// Define the type for the blog detail
interface Blog {
  _id: string;
  title: string;
  body: any; // Portable Text JSON structure
  mainImage?: string;
  slug: {
    current: string;
  };
  author?: {
    name: string;
  };
  categories?: BlogCategory[];
}

// Define the response type from Sanity
interface BlogDetailResponse {
  blogs: Blog[];
}

// Define the type for the categories response
interface BlogCategoriesResponse {
  categories: BlogCategory[];
}

// Define the component props type
interface BlogDetailProps {
  params: {
    blog: string;
  };
}

const myPortableTextComponents: any = {
  //   types: {
  //     image: ({ value }) => <img src={urlFor(value).url()} alt={value.alt || ""} className={styles.blogImage} />,
  //   },
  block: {
    h1: ({ children }: { children: any }) => <h1 className="text-black font-bold text-5xl py-5">{children}</h1>,
    h2: ({ children }: { children: any }) => <h2 className="text-black font-bold text-4xl py-5">{children}</h2>,
    h3: ({ children }: { children: any }) => <h3 className="text-black font-bold text-3xl py-2">{children}</h3>,
    h4: ({ children }: { children: any }) => <h4 className="text-black font-bold text-2xl py-2">{children}</h4>,
    h5: ({ children }: { children: any }) => <h5 className="text-black font-bold text-xl py-2">{children}</h5>,
    p: ({ children }: { children: any }) => <p className="text-black">{children}</p>,
    b: ({ children }: { children: any }) => <b className="text-black font-bold text-5xl">{children}</b>,
    strong: ({ children }: { children: any }) => <strong className="text-black font-bold text-5xl">{children}</strong>,
    a: ({ children }: { children: any }) => <a className="text-black font-bold">{children}</a>,
  },
};

const BlogDetail: React.FC<BlogDetailProps> = async ({ params }) => {
  //   console.log("params", params);

  // Fetch categories and blog data
  const categories: BlogCategoriesResponse = await getBlogCategories();
  const data: BlogDetailResponse = await getBlogsDetail(params.blog);

  //   console.log("data", data.blogs[0]);

  return (
    <>
      <section className="lg:mx-36 text-[#232523]">
        <MainSection categories={categories.categories} />
        {data?.blogs?.map((blog) => (
          <React.Fragment key={blog._id}>
            <h1 className="text-black font-bold text-5xl py-5 pb-8">{blog?.title}</h1>
            <PortableText value={blog?.body} components={myPortableTextComponents} />
          </React.Fragment>
        ))}
      </section>
    </>
  );
};

export default BlogDetail;
