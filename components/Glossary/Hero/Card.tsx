"use client";

import React, { useState } from "react";
import ContentWrapper from "@/components/Blog/ContentWrapper";
import { usePathname, useRouter } from "next/navigation";
const Card = () => {
  const router = useRouter();
  const [selected, setSelected] = useState(null);
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : "it"; //
  const handleClick = (index: any, letter: string) => {
    setSelected(index);
    router.push(`/${locale}/Glossary?glossary=${letter}`);
  };

  return (
    <ContentWrapper>
      <div className="lg:px-48">
        <div className="border rounded-xl px-5 py-4 ">
          <ul className="flex flex-wrap items-center gap-6 md:gap-9">
            <li className={`text-xl cursor-pointer leading-5 hover:text-[#232523] cursor-pointer font-bold ${selected === -1 ? "text-[#017E48]" : "text-slate-500"}`} onClick={() => handleClick(-1, "")}>
              All
            </li>
            {/* <li className={`text-xl cursor-pointer  leading-5 hover:text-[#232523] cursor-pointer font-bold ${selected === -2 ? "text-[#017E48]" : "text-slate-500"}`} onClick={() => handleClick(-2)}>
              #
            </li> */}
            {Array.from({ length: 26 }, (_, i) => (
              <li key={i} className={`text-xl cursor-pointer ${selected === i ? "text-[#017E48]" : "text-slate-500"} hover:text-[#232523] font-bold`} onClick={() => handleClick(i, String.fromCharCode(65 + i))}>
                {String.fromCharCode(65 + i)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Card;
