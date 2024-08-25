import React from "react";
import Image from "next/image";
import img1 from "@/components/BlogCard/image/img.webp";
import Link from "next/link";
import { urlFor } from "@/client";
const Card = ({ data }: { data: any }) => {
  // console.log("dsdsds", data);
  return (
    <Link href={`/game-detail/${data?.slug?.current}`}>
      <div className="game-card bg-white rounded-lg overflow-hidden shadow-md border border-transparent hover:border-[#232523]">
        <div className="image-container">
          <img src={urlFor(data?.bannerImages[0]?.image)?.url()} alt="Crypto ECNs" className="w-full h-[300px] object-cover" />
          {/* <img src={urlFor(blogData?.mainImage)?.url()} width={100} height={100} alt="Picture of the author" className="w-full h-full" /> */}
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-1">
            <h2 className="text-lg font-semibold text-[#232523]">{data?.title}</h2>
            <span className="date text-[#232523]">8/21/2024</span>
          </div>
          <p className="text-gray-600 text-sm mb-2">{data?.location}</p>
          <div className="prizes text-[#232523]">
            <p>
              <b>1st Prize: </b>
              {data?.prizes?.firstPrize}
            </p>
            <p>
              <b>2st Prize: </b>
              {data?.prizes?.secondPrize}
            </p>
            <p>
              <b>3st Prize: </b>
              {data?.prizes?.thirdPrize}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
