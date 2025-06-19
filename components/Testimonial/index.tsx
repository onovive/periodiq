"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import Image from "next/image";
import ContentWrapper from "../Blog/ContentWrapper";

interface Testimonial {
  name: string;
  role: string;
  feedback: string;
  avatar?: string;
  rating?: number;
}

interface Props {
  data?: {
    title?: string;
    subtitle?: string;
    testimonials: Testimonial[];
  };
}

const TestimonialSection: React.FC<Props> = ({ data }) => {
  // Fallback mock data if none is provided
  const fallback: NonNullable<Props["data"]> = {
    title: "Interactive Carousel",
    subtitle: "Rotating testimonials with gradient cards",
    testimonials: [
      {
        name: "Michael Chen",
        role: "Product Manager at InnovateCorp",
        feedback: "I've tried many similar tools, but none come close to the reliability and ease of use this platform offers. It's become an essential part of our daily operations.",
        rating: 5,
      },
      {
        name: "Sophia Martinez",
        role: "CTO at FinTech Labs",
        feedback: "The intuitive UI and rock-solid performance have saved us countless hours. Highly recommended!",
        rating: 5,
      },
      {
        name: "Michael Chen",
        role: "Product Manager at InnovateCorp",
        feedback: "I've tried many similar tools, but none come close to the reliability and ease of use this platform offers. It's become an essential part of our daily operations.",
        rating: 5,
      },
      {
        name: "Sophia Martinez",
        role: "CTO at FinTech Labs",
        feedback: "The intuitive UI and rock-solid performance have saved us countless hours. Highly recommended!",
        rating: 5,
      },
      {
        name: "Michael Chen",
        role: "Product Manager at InnovateCorp",
        feedback: "I've tried many similar tools, but none come close to the reliability and ease of use this platform offers. It's become an essential part of our daily operations.",
        rating: 5,
      },
      {
        name: "Sophia Martinez",
        role: "CTO at FinTech Labs",
        feedback: "The intuitive UI and rock-solid performance have saved us countless hours. Highly recommended!",
        rating: 5,
      },
    ],
  };

  const content = data ?? fallback;

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  return (
    <section className=" pb-10 text-[#232523]">
      <ContentWrapper>
        <div className="text-left mb-14 px-2 testimonial-sec">{content.title && <h2 className="text-[#232523]  text-[32px] sm:text-[56px] leading-[48px] sm:leading-[70px] mt-2 pt-10">{content.title}</h2>}</div>

        <div className="relative">
          <Swiper
            className="testimonial-swiper"
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={0}
            loop
            autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{
              clickable: true,
              el: paginationRef.current ?? undefined,
            }}
            navigation={{
              prevEl: prevRef.current ?? undefined,
              nextEl: nextRef.current ?? undefined,
            }}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
              // @ts-ignore
              swiper.params.pagination.el = paginationRef.current;
            }}
          >
            {content.testimonials.map((item: Testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl py-4 px-8 sm:p-10 sm:py-6 sm:px-10 shadow-md text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
                    {item.avatar ? <Image src={item.avatar} alt={item.name} width={56} height={56} className="w-14 h-14 rounded-full object-cover mr-0 sm:mr-4 mb-4 sm:mb-0" /> : <div className="w-14 h-14 rounded-full bg-gray-300 mr-0 sm:mr-4 mb-4 sm:mb-0" />}
                    <div>
                      <h4 className="font-semibold text-lg mt-4">{item.name}</h4>
                      {/* <p className="text-sm text-gray-600">{item.role}</p> */}
                    </div>
                  </div>

                  <p className="italic leading-relaxed text-gray-800 relative">&ldquo;{item.feedback}&rdquo;</p>

                  {/* {item.rating && (
                    <div className="mt-6 flex justify-center sm:justify-start gap-1 text-yellow-400">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  )} */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons & Pagination Dots */}
          <div className="flex justify-center items-center gap-5 mt-10">
            <button ref={prevRef} className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full hover:bg-[#017e48] hover:text-white transition">
              <FaChevronLeft />
            </button>
            {/* Dots container */}
            <div ref={paginationRef} className="flex items-center" style={{ width: "auto" }} />
            <button ref={nextRef} className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full hover:bg-[#017e48] hover:text-white transition">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default TestimonialSection;
