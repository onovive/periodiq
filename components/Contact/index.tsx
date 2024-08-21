import React from "react";
import ContectUs from "./ContectUs";

type Props = {};

const Contact = (props: Props) => {
  return (
    <section className="relative bg-cover bg-center  px-0 2xl:px-32 my-32" style={{ backgroundImage: "url('contact.jpg')" }}>
      <div className="mx-5 py-32 grid grid-row lg:grid-cols-11 gap-4 text-[#f9f6f1] ">
        <div className="col-span-1">
          <h3 className="flex h3-dot uppercase tracking-[3px] text-sm">Invest</h3>
        </div>
        <div className="col-span-5 sm:w-4/5 mt-2 sm:ml-8">
          <h1 className="text-[32px] sm:text-[56px] leading-[48px] sm:leading-[70px] lg:w-10">Get Started</h1>
          <p className="text-[20px] mt-4 mb-4 leading-[32px] font-extralight">Contact our team today to learn more about Anemoy, our offerings, and how you can start investing today. Let's unlock the full potential of Web3 native asset management and onchain capital together.</p>
        </div>
        <div className="col-span-5 bg-[#fff] rounded-2xl">
          <ContectUs />
        </div>
      </div>
    </section>
  );
};

export default Contact;
