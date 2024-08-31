import React from "react";
import ContectUs from "./ContectUs";

type Props = {};

const Contact = ({ data }: { data: any }) => {
  return (
    <section className="relative bg-cover bg-center  px-0 2xl:px-32 mt-10 md:mt-32" style={{ backgroundImage: "url('/contact.jpg')" }} id="register">
      <div className="mx-5 py-[5rem] md:py-32 grid grid-row lg:grid-cols-11 gap-4 text-[#f9f6f1] ">
        <div className="col-span-1">
          <h3 className="flex h3-dot uppercase tracking-[3px] text-sm">{data?.invest}</h3>
        </div>
        <div className="col-span-5 sm:w-4/5 mt-2 sm:ml-8">
          <h1 className="text-[32px] sm:text-[56px] leading-[48px] sm:leading-[70px] ">{data?.title}</h1>
          <p className="text-[20px] mt-4 mb-4 leading-[32px] font-extralight">{data?.description}</p>
        </div>
        <div className="col-span-5 bg-[#fff] rounded-2xl">
          <ContectUs data={data?.form} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
