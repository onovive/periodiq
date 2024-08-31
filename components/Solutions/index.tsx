import React from "react";

type Props = {};

const Solutions = (props: Props) => {
  return (
    <section className="text-[#232523] mt-32 sm:mt-20 px-0 2xl:px-32">
      <div className="grid grid-rows sm:grid-cols-2 gap-16">
        <div className="mx-5">
          <h3 className="flex h3-dot uppercase tracking-[5px]">Benefits</h3>
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
  );
};

export default Solutions;
