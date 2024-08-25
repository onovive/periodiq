import React from "react";
import Link from "next/link";
import Card from "./Card";

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center px-0 2xl:px-32" style={{ backgroundImage: "url('banner.jpg')" }}>
      <div className="relative z-10">
        {/* Header with Logo and Nav */}
        <header className="flex justify-between items-center px-5  border-b border-[#2325231a]">
          <div className="flex items-center h-20">
            <img src="/Periodiq 3D.svg" alt="Logo" className="h-16 w-auto" />

            {/* <span className="text-white text-xl font-bold ml-2">Periodiq</span> */}
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
        <div className="flex flex-col items-center justify-between py-12">
          <div className="py-5 px-1">
            <h1 className="text-4xl md:text-6xl font-extrabold gradient-text py-2">Glossary</h1>
          </div>
          <div>
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
