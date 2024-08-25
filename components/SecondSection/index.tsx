"use client";

import React, { useState } from "react";
import Solutions from "../Solutions";

const index = () => {
  const [enabled, setEnabled] = useState(true);

  const toggleDivs = () => {
    setEnabled(!enabled);
  };

  return (
    <div className="p-7 md:p-14 mt-12">
      {enabled ? (
        <section className="text-[#232523] mt-32 sm:mt-20 px-0 2xl:px-32">
          <div className="grid grid-rows sm:grid-cols-2 gap-16">
            <div className="mx-5">
              <div className="flex items-center gap-3 py-7">
                <div className="relative">
                  <input type="checkbox" checked={enabled} onChange={toggleDivs} className="sr-only" id="toggle" onClick={toggleDivs} />
                  <label htmlFor="toggle" className={`block w-10 h-5 rounded-full cursor-pointer transition-colors ${enabled ? "bg-[#017e48] " : "bg-gray-300"}`}></label>
                  <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${enabled ? "translate-x-5" : ""}`} />
                </div>
                <h3 className="flex uppercase tracking-[5px]">Benefits</h3>
              </div>
              <h1 className="text-[32px] sm:text-[56px] leading-[48px] sm:leading-[70px] mt-2">Investment Solutions Tailored to Your Goals</h1>
              <p className="text-lg sm:text-xl mt-6">At Anemoy, we combine deep expertise in traditional finance with a forward-thinking approach to blockchain and Web3 to bring a unique asset management offering. Purpose-built to merge high-yielding investment opportunities with innovative technology solutions, Anemoy unlocks value for all.</p>
            </div>
            <div className="mx-4 sm:ml-12 sm:mr-3 h-screen hide-scrollbar overflow-auto">
              <div className="">
                <h1 className="text-[32px] sm:text-[56px] text-[#017e48] leading-[48px] sm:leading-[70px] mt-2 pb-3 border-b border-[#23252362]">Investment Diversification</h1>
                {/* <hr className="h-3 " /> */}
                <p className="text-lg sm:text-xl mt-4 h-36">Institutional grade investment opportunities.</p>
              </div>
              <div className="">
                <h1 className="text-[32px] sm:text-[56px] text-[#017e48] leading-[48px] sm:leading-[70px] mt-2 pb-3 border-b border-[#23252362]">Tech Enabled</h1>
                {/* <hr className="h-3 " /> */}
                <p className="text-xl mt-4 h-36">Operational efficiencies and savings through blockchain technology.</p>
              </div>
              <div className="">
                <h1 className="text-[32px] sm:text-[56px] text-[#017e48] leading-[48px] sm:leading-[70px] mt-2 pb-3 border-b border-[#23252362]">Tokenized Ownership</h1>
                {/* <hr className="h-3 " /> */}
                <p className="text-xl mt-4 h-36">Invest with stablecoins and manage your portfolio onchain.</p>
              </div>
              <div className="">
                <h1 className="text-[32px] sm:text-[56px] text-[#017e48] leading-[48px] sm:leading-[70px] mt-2 pb-3 border-b border-[#23252362]">Investment Visibility</h1>
                {/* <hr className="h-3 " /> */}
                <p className="text-xl mt-4 h-36">View fund holdings at the asset level directly onchain with live data.</p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="text-[#232523] mt-32 sm:mt-20 px-0 2xl:px-32">
          <div className="grid grid-rows sm:grid-cols-2 gap-16">
            <div className="mx-5">
              <div className="flex items-center gap-3 py-7">
                <div className="relative">
                  <input type="checkbox" checked={enabled} onChange={toggleDivs} className="sr-only" id="toggle" onClick={toggleDivs} />
                  <label htmlFor="toggle" className={`block w-10 h-5 rounded-full cursor-pointer transition-colors ${enabled ? "bg-[#017e48] " : "bg-gray-300"}`}></label>
                  <span className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${enabled ? "translate-x-5" : ""}`} />
                </div>
                <h3 className="flex uppercase tracking-[5px]">Benefits</h3>
              </div>
              <h1 className="text-[32px] sm:text-[56px] leading-[48px] sm:leading-[70px] mt-2">NEW DIV display</h1>
              <p className="text-lg sm:text-xl mt-6">At Anemoy, we combine deep expertise in traditional finance with a forward-thinking approach to blockchain and Web3 to bring a unique asset management offering. Purpose-built to merge high-yielding investment opportunities with innovative technology solutions, Anemoy unlocks value for all.</p>
            </div>
            <div className="mx-4 sm:ml-12 sm:mr-3 h-screen hide-scrollbar overflow-auto">
              <div className="">
                <h1 className="text-[32px] sm:text-[56px] text-[#017e48] leading-[48px] sm:leading-[70px] mt-2 pb-3 border-b border-[#23252362]">Investment Diversification</h1>
                {/* <hr className="h-3 " /> */}
                <p className="text-lg sm:text-xl mt-4 h-36">Institutional grade investment opportunities.</p>
              </div>
              <div className="">
                <h1 className="text-[32px] sm:text-[56px] text-[#017e48] leading-[48px] sm:leading-[70px] mt-2 pb-3 border-b border-[#23252362]">Tech Enabled</h1>
                {/* <hr className="h-3 " /> */}
                <p className="text-xl mt-4 h-36">Operational efficiencies and savings through blockchain technology.</p>
              </div>
              <div className="">
                <h1 className="text-[32px] sm:text-[56px] text-[#017e48] leading-[48px] sm:leading-[70px] mt-2 pb-3 border-b border-[#23252362]">Tokenized Ownership</h1>
                {/* <hr className="h-3 " /> */}
                <p className="text-xl mt-4 h-36">Invest with stablecoins and manage your portfolio onchain.</p>
              </div>
              <div className="">
                <h1 className="text-[32px] sm:text-[56px] text-[#017e48] leading-[48px] sm:leading-[70px] mt-2 pb-3 border-b border-[#23252362]">Investment Visibility</h1>
                {/* <hr className="h-3 " /> */}
                <p className="text-xl mt-4 h-36">View fund holdings at the asset level directly onchain with live data.</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default index;
