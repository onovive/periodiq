"use client";

import React, { useState } from "react";
import Link from "next/link";

const MainSection = ({ categories }: { categories: any }) => {
  const [selected, setSelected] = useState(null);
  console.log("catg", categories);
  const handleClick = (index: any) => {
    setSelected(index);
  };

  // const categories = ["All", "Academy", "Company", "Product", "Regulation"];
  return (
    <section className="relative bg-cover bg-center px-0 2xl:px-32" style={{ backgroundImage: "url('banner.jpg')" }}>
      <div className="relative z-10">
        {/* Header with Logo and Nav */}
        <header className="flex justify-between items-center px-5  border-b border-[#2325231a]">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="h-28 w-auto" />
          </div>
          <nav className="space-x-8 hidden md:block">
            <Link href="#" className="text-[#232523] font-bold text-lg">
              Blog
            </Link>
            <Link href="#" className="text-white text-md">
              <button className="bg-[#232523] text-white py-3 px-6 rounded-full font-bold hover:bg-[#017e48] transition duration-300 ease-in-out">Get Started -{">"} </button>
            </Link>
          </nav>
        </header>

        {/* Hero Content */}
        <div className="flex flex-col items-start md:items-center justify-between py-20">
          <div className="py-1  px-1">
            <h1 className="text-6xl font-extrabold gradient-text h-20 ">Knowledge Hub</h1>
          </div>
          <div className="pt-8">
            <ul className="flex flex-col gap-5 md:gap-20 2xl:gap-[10rem] md:flex-row justify-left items-left md:border rounded-full px-7 py-1">
              {categories.map((category: any, index: any) => (
                <li key={index} onClick={() => handleClick(index)} className={`text-lg cursor-pointer ${selected === index ? "text-amber-300" : "text-slate-500"} hover:text-[#232523] font-bold`}>
                  {category?.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
