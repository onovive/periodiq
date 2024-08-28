"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiAlignJustify } from "react-icons/fi";

type Props = {};

const NavHeader = (props: Props) => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <header className="absolute left-0 right-0 flex flex-col bg-[#f9f6f1] md:bg-transparent md:flex-row  justify-between items-center  px-5 border-b border-[#2325231a] z-50">
      <div className="flex justify-between w-full md:w-auto items-center h-20">
        <Link href="/">
          <img src="/PeriodiQ.svg" alt="Logo" className="h-12 w-auto" />
        </Link>
        <div className="md:hidden">
          <FiAlignJustify onClick={toggleOptions} className={`text-2xl ${showOptions ? "text-green-700" : "text-black"}`} />
        </div>
      </div>

      <nav className={`flex flex-col md:flex-row gap-2 md:gap-5 pb-5 md:pb-0 items-center w-full md:w-auto ${showOptions ? "block" : "hidden"} md:flex`}>
        <Link href="/blogs" className="text-[#232523] font-bold text-lg py-5">
          Blog
        </Link>

        <Link href="/#register" className="w-full md:w-auto">
          <button className="bg-[#232523] w-full md:w-auto text-white py-3 md:px-6 rounded-full font-bold hover:bg-[#017e48] transition duration-300 ease-in-out">Get Started -{">"}</button>
        </Link>
      </nav>
    </header>
  );
};

export default NavHeader;
