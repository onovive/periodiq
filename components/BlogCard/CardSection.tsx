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
import { usePathname, useRouter } from "next/navigation";

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

const CardSection = ({ lang, data }: { lang: any; data: any }) => {
  const [length, setlength] = useState(data?.blogs?.length);
  const [show, setshow] = useState(4);
  const handleShow = () => {
    setshow((prev) => prev + 4);
  };
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : "it"; //
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
                <Card lang={lang} mainImage={item?.mainImage} title={item?.title} Discription={item?.description} date={item?.publishedAt} SmallScreen={true} slug={item?.slug?.current} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center justify-center py-6 ">
            <Link href="blogs" className="px-10 py-2 text-black bg-white border hover:border-[#017e48] font-bold rounded-full block md:hidden">
              {data?.readMore}
            </Link>
          </div>
        </div>
        <div className="hidden md:grid grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-4 gap-7 pt-16">
          {data?.blogs?.slice(0, show).map((item: any, index: any) => {
            return <Card lang={lang} mainImage={item?.mainImage} key={index} title={item?.title} Discription={item?.description} date={item?.publishedAt} slug={item?.slug?.current} SmallScreen={false} />;
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
            <Link href={`/${locale}/blogs`} className="px-10 py-2 text-[#232523] bg-white border hover:border-[#017e48] font-bold rounded-full hidden md:block" onClick={handleShow}>
              {data?.readMore}
            </Link>
          </div>
        )}
      </div>
    </ContentWrapper>
  );
};

export default CardSection;
