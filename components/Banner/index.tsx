import React from "react";
import Link from "next/link";
type Props = {};

const Banner = (props: Props) => {
  return (
    <>
      <section className="relative bg-cover bg-center h-screen px-0 2xl:px-32" style={{ backgroundImage: "url('banner.jpg')" }}>
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

        {/* Container for content and overlay */}
        <div className="relative z-10 h-full">
          {/* Header with Logo and Nav */}
          <header className="flex justify-between items-center p-5  border-b border-[#2325231a]">
            <div className="flex items-center">
              <img src="https://cdn.prod.website-files.com/64c27655f6c395d4c6a0ed33/64ff550a60f502cae78bc526_anemoy-logo.png" alt="Logo" className="h-10 w-auto" />
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
          <div className="flex flex-col mt-14 sm:mt-28 2xl:mt-72 h-full text-[#232523]  px-6 sm:px-32 2xl:px-32 leading-10">
            <h1 className="text-4xl sm:text-5xl  lg:text-5xl xl:text-6xl 2xl:text-7xl font-extralight mb-4 text-left leading-[48px] lg:leading-[76px] xl:leading-[90px] ">
              Anemoy is a <span className="text-5xl sm:text-6xl  lg:text-6xl xl:text-7xl 2xl:text-8xl text-[#017e48] "> web3 </span>native asset manager providing investors with exposure to a broad spectrum of superior assets.
            </h1>
            <Link href="#" className="text-white text-md mt-6 block md:hidden">
              <button className="bg-[#232523] text-white py-3 px-6 rounded-full font-bold hover:bg-[#017e48] transition duration-300 ease-in-out">
                {" "}
                Get Started &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-2xl "> -{">"}</span>{" "}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
