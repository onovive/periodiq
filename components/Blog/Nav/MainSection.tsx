"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NavHeader from "@/components/NavHeader";
import { usePathname } from "next/navigation";
const MainSection = ({ searchParams, header, categories, heading }: { header: any; searchParams: any; categories: any; heading: any }) => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : "it"; //
  console.log("urlsxxx:", pathname);
  const [selected, setSelected] = useState(0);
  const [allCategories, setAllCategories] = useState([]);
  const handleClick = (index: any, category: any) => {
    setSelected(index);
    const categoryParam = category === "Tutti" || category === "All" ? "" : category;
    router.push(pathname === `${locale}/blogs` ? `/blogs${categoryParam ? `?category=${categoryParam}` : ""}` : `/${locale}/blogs${categoryParam ? `?category=${categoryParam}` : ""}`);
  };
  useEffect(() => {
    const modifiedCategories: any = [{ title: locale == "en" ? "All" : "Tutti" }, ...categories];
    setAllCategories(modifiedCategories);
  }, [categories]);

  return (
    <section className="relative bg-cover bg-center px-0 2xl:px-32" style={{ backgroundImage: "url('/banner.jpg')" }}>
      {allCategories && (
        <div className="relative z-10">
          {/* Header with Logo and Nav */}
          <NavHeader data={header} />

          {/* Hero Content */}
          <div className="flex flex-col items-start md:items-center justify-between py-10 sm:py-10 pt-28 sm:pt-36">
            <div className="py-1  px-2 md:px-1">
              <h1 className="text-4xl md:text-6xl font-extrabold gradient-text h-20 ">{heading.heading}</h1>
            </div>
            <div className="sm:pt-8 mx-4">
              <ul className="flex flex-col md:flex-row md:flex-wrap md:justify-center md:gap-4 md:border md:rounded-full md:px-7 w-full">
                {allCategories.map((category: any, index: any) => (
                  <li key={index} onClick={() => handleClick(index, category?.title)} className={`text-xl cursor-pointer px-3 md:px-3 py-2 ${selected === index ? "text-[#017E48] bg-[#017e4811] " : "text-[#232523]"} hover:text-[#017E48] font-bold`}>
                    {category?.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MainSection;
