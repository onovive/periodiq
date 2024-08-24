"use client";

import React, { useState } from "react";
import ContentWrapper from "@/components/Blog/ContentWrapper";

const Card = () => {
  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    setSelected(index);
  };
  return (
    <ContentWrapper>
      <div className="lg:px-24">
        <div className="border rounded-xl px-5 py-4 ">
          <ul className="flex flex-wrap items-center gap-6 md:gap-9">
            <li className={`text-xl cursor-pointer leading-5 hover:text-[#232523] cursor-pointer font-bold ${selected === -1 ? "text-amber-300" : "text-slate-500"}`} onClick={() => handleClick(-1)}>
              All
            </li>
            <li className={`text-xl cursor-pointer  leading-5 hover:text-[#232523] cursor-pointer font-bold ${selected === -2 ? "text-amber-300" : "text-slate-500"}`} onClick={() => handleClick(-2)}>
              #
            </li>
            {Array.from({ length: 26 }, (_, i) => (
              <li key={i} className={`text-xl cursor-pointer ${selected === i ? "text-amber-300" : "text-slate-500"} hover:text-[#232523] font-bold`} onClick={() => handleClick(i)}>
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
