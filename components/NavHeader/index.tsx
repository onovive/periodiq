import React from "react";
import Link from "next/link";
type Props = {};

const NavHeader = (props: Props) => {
  return (
    <>
      <header className="flex justify-between items-center px-5  border-b border-[#2325231a]">
        <div className="flex items-center h-20">
          <Link href="/">
            <img src="/Periodiq 3D.svg" alt="Logo" className="h-16 w-auto" />
          </Link>
          {/* <span className="text-white text-xl font-bold ml-2">Periodiq</span> */}
        </div>
        <nav className="space-x-8 hidden md:block">
          <Link href="/blog" className="text-[#232523] font-bold text-lg">
            Blog
          </Link>
          <Link href="#" className="text-white text-md">
            <button className="bg-[#232523] text-white py-3 px-6 rounded-full font-bold hover:bg-[#017e48] transition duration-300 ease-in-out">Get Started -{">"} </button>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default NavHeader;
