"use client";

import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { urlFor } from "@/client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiChevronDown, FiGlobe } from "react-icons/fi"; // Icon for dropdown arrow

const NavHeader = ({ data }: { data: any }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false); // For custom dropdown
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : "it";
  const [selectedLocale, setSelectedLocale] = useState(locale);

  const toggleOptions = () => setShowOptions(!showOptions);
  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const changeLanguage = (newLocale: string) => {
    setSelectedLocale(newLocale);
    setDropdownOpen(false);

    // Replace the current locale with the new locale in the pathname
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);

    // Navigate to the same path but with the new locale
    router.push(newPathname);
  };

  return (
    <header className="absolute left-0 right-0 flex flex-col bg-[#f9f6f1] md:bg-transparent md:flex-row justify-between items-center px-5 border-b border-[#2325231a] z-50">
      <div className="flex justify-between w-full md:w-auto items-center h-20">
        <Link href={`/${locale}`}>
          <img src={urlFor(data?.logo)?.url()} alt="Logo" className="h-12 w-auto" />
        </Link>
        <div className="md:hidden">
          <FiAlignJustify onClick={toggleOptions} className={`text-2xl ${showOptions ? "text-green-700" : "text-black"}`} />
        </div>
      </div>

      <nav className={`flex flex-col md:flex-row gap-2 md:gap-5 pb-5 md:pb-0 items-center w-full md:w-auto ${showOptions ? "block" : "hidden"} md:flex`}>
        {/* Custom dropdown */}
        <div className="relative">
          <div className="flex items-center justify-between px-4 py-2 rounded-md cursor-pointer hover:border-gray-400 focus:outline-none" onClick={toggleDropdown}>
            {/* Globe Icon */}
            <FiGlobe className="mr-2 text-black" />
            <span className="text-black text-base">{selectedLocale === "en" ? "EN" : "IT"}</span>
            <FiChevronDown className="ml-2 text-black" />
          </div>
          {isDropdownOpen && (
            <div className="absolute mt-[-2px] bg-[#faf7f2] border border-gray-200 rounded-md shadow-lg z-10">
              <div className={`px-2 mx-2 py-1 my-1 text-black text-sm cursor-pointer hover:bg-[#ede9e6] transition-colors ${selectedLocale === "en" ? "font-bold" : ""}`} onClick={() => changeLanguage("en")}>
                English
              </div>
              <div className={`px-2 mx-2 py-1 my-1 text-black text-sm cursor-pointer hover:bg-[#ede9e6] transition-colors ${selectedLocale === "it" ? "font-bold" : ""}`} onClick={() => changeLanguage("it")}>
                Italian
              </div>
            </div>
          )}
        </div>

        {/* Other links */}
        <Link href={pathname === "/blogs" ? "/blogs" : `/${locale}/blogs`} className="text-[#232523] font-bold text-lg py-5">
          {data?.blogTitle}
        </Link>

        <Link target={"_blank"} rel={"noreferrer"} href={`https://${data?.getStartedUrl}`} className="w-full md:w-auto">
          <button className="bg-[#232523] w-full md:w-auto text-white py-3 md:px-6 rounded-full font-bold hover:bg-[#017e48] transition duration-300 ease-in-out">
            {data?.getStarted} -{">"}
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default NavHeader;
