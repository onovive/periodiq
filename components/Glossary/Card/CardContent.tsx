import Link from "next/link";
import React from "react";

const CardContent = ({ title, description, slug }: { title: any; description: any; slug: any }) => {
  return (
    <div className="lg:px-48 ">
      <Link href={`/Glossary/${slug}`}>
        <div className="flex flex-col items-start cursor-pointer shadow-md text-[#232523] border rounded-xl px-6 py-6 hover:hover:border-[#232523] transition-shadow duration-300 ease-in-out">
          <div className="mb-2">
            <h1 className="text-2xl font-semibold text-[#232523] leading-6">{title}</h1>
          </div>
          <div>
            <p className="text-base leading-5 text-[#232523] line-clamp-2">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardContent;
