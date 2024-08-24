import React from "react";
import Image from "next/image";
import Content from "./Content";
import img1 from "./image/img.webp";

const Card = () => {
  return (
    <section className="rounded-3xl overflow-hidden shadow-lg transition-transform transform border border-[#2325231a] hover:border-[#232523]">
      <div className="">
        <img src={"/blogs.webp"} width={100} height={100} alt="Picture of the author" className="w-full h-full" />
      </div>
      <div className="p-4">
        <Content />
      </div>
    </section>
  );
};

export default Card;
