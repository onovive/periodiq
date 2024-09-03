"use client";

import React, { useState } from "react";
import Card from "./Card";
import Link from "next/link";
import ContentWrapper from "../Blog/ContentWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const articlesAPI = [
  {
    id: 1,
    date: "Aug 14 2024",
    title: "Understanding Market Liquidity: Key Concepts and Strategies",
    description: "This article delves into the key concepts and strategies related to market liquidity, exploring its impact on asset pricing and market efficiency.",
    link: "/articles/understanding-market-liquidity",
  },
  {
    id: 2,
    date: "Aug 13 2024",
    title: "Case Study: INXY X FinchTrade",
    description: "INXY is a B2B company offering payment solutions, specializing in enabling merchants to accept crypto payments and manage digital assets. This case study explores their collaboration with FinchTrade.",
    link: "/articles/case-study-inxy-finchtrade",
  },
  {
    id: 3,
    date: "Aug 13 2024",
    title: "Advantages of OTC Trading in Crypto Payment Processing",
    description: "This article explores the advantages of OTC trading in crypto payment processing, highlighting its benefits such as enhanced privacy, reduced slippage, and better pricing.",
    link: "/articles/advantages-of-otc-trading",
  },
  {
    id: 4,
    date: "Aug 14 2024",
    title: "Understanding Market Liquidity: Key Concepts and Strategies",
    description: "This article delves into the key concepts and strategies related to market liquidity, exploring its impact on asset pricing and market efficiency.",
    link: "/articles/understanding-market-liquidity",
  },
  {
    id: 5,
    date: "Aug 13 2024",
    title: "Case Study: INXY X FinchTrade",
    description: "INXY is a B2B company offering payment solutions, specializing in enabling merchants to accept crypto payments and manage digital assets. This case study explores their collaboration with FinchTrade.",
    link: "/articles/case-study-inxy-finchtrade",
  },
];

const breakpoints = {
  300: {
    slidesPerView: 1.2,
  },
  440: {
    slidesPerView: 1.5,
  },
  540: {
    slidesPerView: 1.7,
  },
  640: {
    slidesPerView: 2.2,
  },
  768: {
    slidesPerView: 3.3,
  },
};

const CardSection = ({ data }: { data: any }) => {
  const [length, setlength] = useState(data?.blogs?.length);
  const [show, setshow] = useState(4);
  const handleShow = () => {
    setshow((prev) => prev + 4);
  };
  return (
    <ContentWrapper>
      <div className=" sm:pb-0">
        <div className="px-1">
          <h1 className="text-[#232523]  text-[32px] sm:text-[56px] leading-[48px] sm:leading-[70px] mt-2 pt-10">{data?.title}</h1>
        </div>
        <div className="md:hidden pt-10">
          <Swiper spaceBetween={12} slidesPerView={1} breakpoints={breakpoints}>
            {data?.blogs?.map((item: any, index: any) => (
              <SwiperSlide key={index}>
                <Card mainImage={item?.mainImage} title={item?.title} Discription={item?.description} date={item?.publishedAt} SmallScreen={true} slug={item?.slug?.current} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center justify-center py-6 ">
            <Link href="/blogs" className="px-10 py-2 text-black bg-white border hover:border-[#017e48] font-bold rounded-full block md:hidden">
              {data?.readMore}
            </Link>
          </div>
        </div>
        <div className="hidden md:grid grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-4 gap-7 pt-16">
          {data?.blogs?.slice(0, show).map((item: any, index: any) => {
            return <Card mainImage={item?.mainImage} key={index} title={item?.title} Discription={item?.description} date={item?.publishedAt} slug={item?.slug?.current} SmallScreen={false} />;
          })}
        </div>
        {show <= length ? (
          <div className="flex items-center justify-center py-6 sm:py-14 hidden md:flex">
            <button className="px-10 py-2 text-[#232523] bg-white border hover:border-[#017e48] font-bold rounded-full hidden md:block" onClick={handleShow}>
              {data?.seeMoreNews}
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center pt-14 pb-5 hidden md:flex">
            <Link href="/blogs" className="px-10 py-2 text-[#232523] bg-white border hover:border-[#017e48] font-bold rounded-full hidden md:block" onClick={handleShow}>
              {data?.readMore}
            </Link>
          </div>
        )}
      </div>
    </ContentWrapper>
  );
};

export default CardSection;
