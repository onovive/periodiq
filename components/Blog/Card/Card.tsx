import React from "react";
import Image from "next/image";
import Content from "./Content";
import img1 from "./image/img.webp";
import { urlFor } from "@/client";
import Link from "next/link";
const Card = ({ blogData, lang }: { blogData: any; lang: any }) => {
  return (
    <section className="rounded-3xl overflow-hidden shadow-lg transition-transform transform border border-[#2325231a] hover:border-[#232523]">
      <Link href={`blogs/${blogData?.slug.current}`}>
        <div className="">
          <img src={urlFor(blogData?.mainImage)?.url()} width={100} height={100} alt="Picture of the author" className="w-full h-84" />
        </div>
        <div className="p-4">
          <Content data={blogData} />
        </div>
      </Link>
    </section>
  );
};

export default Card;
