"use client";

import React, { createContext } from "react";
import Link from "next/link";
import NavHeader from "../NavHeader";
import { PortableText } from "@portabletext/react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

const MyContext = createContext(null);

type Props = {};
const myPortableTextComponents: any = {
  marks: {
    strong: ({ children }: { children: any }) => <strong className="text-4xl  min-[480px]:text-6xl sm:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-[#017e48]">{children}</strong>,
    em: ({ children }: { children: any }) => <em className="italic text-4xl min-[480px]:text-5xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 text-left leading-[48px] lg:leading-[76px] xl:leading-[90px] text-[#232523]">{children}</em>,
  },
  block: {
    h1: ({ children }: { children: any }) => <h1 className="text-[#232523] text-4xl min-[480px]:text-5xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extralight mb-4 text-left leading-[48px] lg:leading-[76px] xl:leading-[90px] font-ttfirsNeue">{children}</h1>,
    h2: ({ children }: { children: any }) => <h2 className="text-[#232523 font-bold text-4xl py-5">{children}</h2>,
    h3: ({ children }: { children: any }) => <h3 className="text-[#232523 font-bold text-3xl py-2">{children}</h3>,
    h4: ({ children }: { children: any }) => <h4 className="text-[#232523 font-bold text-2xl py-2">{children}</h4>,
    h5: ({ children }: { children: any }) => <h5 className="text-[#232523 font-bold text-xl py-2">{children}</h5>,
    p: ({ children }: { children: any }) => <p className="text-[#232523">{children}</p>,
    b: ({ children }: { children: any }) => <b className="text-5xl sm:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-[#017e48]">{children}</b>,
    a: ({ children }: { children: any }) => <a className="text-[#232523 font-bold">{children}</a>,
  },
};
const Banner = ({ lang, data, header }: { lang: any; data: any; header: any }) => {
  return (
    <>
      <section className="relative bg-cover bg-center md:h-screen px-0 2xl:px-32 " style={{ backgroundImage: "url('banner.jpg')" }}>
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

        {/* Container for content and overlay */}
        <div className="relative z-10 h-full">
          {/* Header with Logo and Nav */}
          <div className="relative left-0 right-0">
            <NavHeader data={header} />
          </div>
          {/* Hero Content */}
          <div className="flex flex-col md:items-start md:justify-center items-start justify-center pt-36 md:pt-44 h-full px-6 sm:px-24 lg:px-32 2xl:px-32 leading-10">
            <PortableText value={data?.body} components={myPortableTextComponents} />
            <Link href="/#register" className="text-white text-md mt-6 block md:hidden">
              <button className="flex items-center bg-[#232523] text-white py-3 px-6 rounded-full font-bold hover:bg-[#017e48] transition duration-300 ease-in-out">
                {data?.mobileGetStarted} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-2xl">
                  <FaArrowRight />
                </span>
              </button>
            </Link>
            <motion.div className=" hidden md:flex " initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: "easeInOut" }}>
              <Link href={`/${lang}/#Benefits`} className="flex items-center mb-6 hidden md:flex">
                <button className="bg-transparent p-4 border border-gray-400 rounded-full font-bold hover:border-[#017e48] transition duration-300 ease-in-out">
                  <FaArrowDown className="text-[#232523] text-xl" />
                </button>
                <p className="text-[#232523] text-xl ml-4">{data?.explore}</p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
