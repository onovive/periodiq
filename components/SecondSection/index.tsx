"use client";

import React, { useState } from "react";
import Solutions from "../Solutions";

const Index = ({ data }: { data: any }) => {
  const [enabled, setEnabled] = useState(true);
  const toggleDivs = () => {
    setEnabled(!enabled);
  };

  return (
    <div className="p-3 sm:p-7 md:p-0 sm:mt-14">
      {enabled ? (
        <section className="text-[#232523] mt-32 sm:mt-20 px-0 2xl:px-32">
          {data?.person && (
            <div className="grid grid-rows sm:grid-cols-2 gap-16">
              <div className="mx-0 sm:mx-5">
                <div className="">
                  <h3 className="flex h3-dot uppercase tracking-[5px]">
                    <span className="mt-[-3px]">Benefits</span>
                  </h3>
                  <div className="relative my-5">
                    <label htmlFor="toggle" className="block cursor-pointer">
                      <input type="checkbox" checked={enabled} onChange={toggleDivs} className="sr-only" id="toggle" />
                      <div className={`block w-10 h-5 rounded-full transition-colors ${enabled ? "bg-[#017e48]" : "bg-gray-300"}`}></div>
                      <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${enabled ? "translate-x-5" : ""}`} />
                    </label>
                  </div>
                </div>
                <h1 className="text-[32px] sm:text-[56px] leading-[36px] sm:leading-[60px] mt-2">{data?.person?.title}</h1>
                <p className="text-lg sm:text-xl mt-6">{data?.person?.description}</p>
              </div>
              <div className=" mx-2 sm:mx-4 sm:ml-12 sm:mr-3 sm:h-screen hide-scrollbar sm:overflow-auto">
                {data?.person?.specifications?.map((specs: any) => (
                  <div key={specs?._key} className="">
                    <h1 className="text-[32px] sm:text-[56px] text-[#017e48] leading-[48px] sm:leading-[70px] mt-2 pb-3 border-b border-[#23252362]">{specs?.heading}</h1>
                    {/* <hr className="h-3 " /> */}
                    <p className="text-lg sm:text-xl mt-4 h-36">{specs?.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      ) : (
        <section className="text-[#232523] mt-32 sm:mt-20 px-0 2xl:px-32">
          {data?.company && (
            <div className="grid grid-rows sm:grid-cols-2 gap-16">
              <div className="mx-0 sm:mx-5">
                <div className="flex items-center gap-3 py-7">
                  <h3 className="flex uppercase tracking-[5px]">Benefits</h3>
                  <div className="relative">
                    <label htmlFor="toggle" className="block cursor-pointer">
                      <input type="checkbox" checked={enabled} onChange={toggleDivs} className="sr-only" id="toggle" />
                      <div className={`block w-10 h-5 rounded-full transition-colors ${enabled ? "bg-[#017e48]" : "bg-gray-300"}`}></div>
                      <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${enabled ? "translate-x-5" : ""}`} />
                    </label>
                  </div>
                </div>
                <h1 className="text-[32px] sm:text-[56px] leading-[48px] sm:leading-[70px] mt-2">{data?.company?.title}</h1>
                <p className="text-lg sm:text-xl mt-6">{data?.company?.description}</p>
              </div>
              <div className="mx-2 sm:mx-4 sm:ml-12 sm:mr-3 sm:h-screen hide-scrollbar sm:overflow-auto">
                {data?.company?.specifications?.map((specs: any) => (
                  <div key={specs?._key} className="">
                    <h1 className="text-[32px] sm:text-[56px] text-[#017e48] leading-[48px] sm:leading-[70px] mt-2 pb-3 border-b border-[#23252362]">{specs?.heading}</h1>
                    {/* <hr className="h-3 " /> */}
                    <p className="text-lg sm:text-xl mt-4 h-36">{specs?.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default Index;
