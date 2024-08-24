import React from "react";
import Image from "next/image";
import img1 from "@/components/BlogCard/image/img.webp";
import Link from "next/link";

const Card = () => {
  return (
    <Link href={"/CardDetail"}>
      <div className="game-card bg-white rounded-lg overflow-hidden shadow-md border border-transparent hover:border-[#232523]">
        <div className="image-container">
          <Image src={img1} alt="Crypto ECNs" className="w-full h-[300px] object-cover" />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-1">
            <h2 className="text-lg font-semibold text-[#232523]">Puzzle Game</h2>
            <span className="date text-[#232523]">8/21/2024</span>
          </div>
          <p className="text-gray-600 text-sm mb-2">Milan, Italy</p>
          <div className="prizes text-[#232523]">
            <p>
              <b>1st Prize: </b>€4000
            </p>
            <p>
              <b>2st Prize: </b>€5000
            </p>
            <p>
              <b>3st Prize: </b>€6000
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
