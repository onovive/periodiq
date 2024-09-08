'use client';

import React, { createContext } from "react";
import Image from "next/image";
import { urlFor } from "@/client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MyContext = createContext(null);

const Header = ({ data }: { data: any }) => {
  return (
    <div>
      <div className="game-header h-96 rounded-lg shadow-lg mb-8 flex items-end relative">
        <div className="absolute inset-0 grid grid-cols-1">
          <Swiper
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
            modules={[Autoplay, Navigation, Pagination]}
            className="relative w-full"
          >
            <SwiperSlide>
              <Image
                src={urlFor(data[0]?.image)?.url()}
                alt="Main Image"
                layout="fill"
                className="rounded-lg hover:brightness-75 transition duration-300"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={urlFor(data[1]?.image)?.url()}
                alt="Secondary Image"
                layout="fill"
                className="rounded-lg hover:brightness-75 transition duration-300"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Header;
