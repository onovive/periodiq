import React from "react";
import Link from "next/link";
import NavHeader from "../NavHeader";
import { PortableText } from "@portabletext/react";
type Props = {};
const myPortableTextComponents: any = {
  block: {
    h1: ({ children }: { children: any }) => <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extralight mb-4 text-left leading-[48px] lg:leading-[76px] xl:leading-[90px]">{children}</h1>,
    h2: ({ children }: { children: any }) => <h2 className="text-black font-bold text-4xl py-5">{children}</h2>,
    h3: ({ children }: { children: any }) => <h3 className="text-black font-bold text-3xl py-2">{children}</h3>,
    h4: ({ children }: { children: any }) => <h4 className="text-black font-bold text-2xl py-2">{children}</h4>,
    h5: ({ children }: { children: any }) => <h5 className="text-black font-bold text-xl py-2">{children}</h5>,
    p: ({ children }: { children: any }) => <p className="text-black">{children}</p>,
    b: ({ children }: { children: any }) => <b className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-[#017e48]">{children}</b>,
    strong: ({ children }: { children: any }) => <strong className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-[#017e48]">{children}</strong>,
    a: ({ children }: { children: any }) => <a className="text-black font-bold">{children}</a>,
  },
};
const Banner = ({ data }: { data: any }) => {
  return (
    <>
      <section className="relative bg-cover bg-center h-screen px-0 2xl:px-32" style={{ backgroundImage: "url('banner.jpg')" }}>
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

        {/* Container for content and overlay */}
        <div className="relative z-10 h-full">
          {/* Header with Logo and Nav */}
          <NavHeader />

          {/* Hero Content */}
          <div className="flex flex-col mt-14 sm:mt-28 2xl:mt-72 h-full text-[#232523]  px-6 sm:px-32 2xl:px-32 leading-10">
            <PortableText value={data?.body} components={myPortableTextComponents} />
            {/* <h1 className="text-4xl sm:text-5xl  lg:text-5xl xl:text-6xl 2xl:text-7xl font-extralight mb-4 text-left leading-[48px] lg:leading-[76px] xl:leading-[90px] ">
              Anemoy is a <span className="text-5xl sm:text-6xl  lg:text-6xl xl:text-7xl 2xl:text-8xl text-[#017e48] "> web3 </span>native asset manager providing investors with exposure to a broad spectrum of superior assets.
            </h1> */}
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
