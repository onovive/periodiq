import React from "react";

const ContectUs = () => {
  return (
    <div>
      <form action="" className="p-5 py-10 sm:p-24">
        <input type="text" placeholder="Full Name" className="w-full font-extralight px-3 py-4 text-sm border border-[#e8eae8] rounded-lg  hover:border-[#017e48] focus:border-2 focus:border-[#017e48]" />
        <div className=" mt-5">
          <input type="email" placeholder="Email address" className="w-full font-extralight px-3 py-4 text-sm border border-[#e8eae8] rounded-lg  hover:border-[#017e48] focus:border-2 focus:border-[#017e48]" />
          {/* <div>
                        <input type="text" placeholder="Organization name" className="w-full font-extralight px-3 py-4 text-sm border border-[#e8eae8] rounded-lg  hover:border-[#017e48] focus:border-2 focus:border-[#017e48]" />
                    </div> */}
        </div>
        <div className="mt-5">
          <input type="city" placeholder="City" className="w-full font-extralight px-3 py-4 text-sm border border-[#e8eae8] rounded-lg  hover:border-[#017e48] focus:border-2 focus:border-[#017e48]" />
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <div>
            <input type="text" placeholder="Citizenship" className="w-full font-extralight px-3 py-4 text-sm border border-[#e8eae8] rounded-lg  hover:border-[#017e48] focus:border-2 focus:border-[#017e48]" />
          </div>
          <div>
            <input type="text" placeholder="Residence" className="w-full font-extralight px-3 py-4 text-sm border border-[#e8eae8] rounded-lg  hover:border-[#017e48] focus:border-2 focus:border-[#017e48]" />
          </div>
        </div> */}
        {/* <div className="flex justify-center items-center mt-5 text-black">
          <select name="investor" className="w-full font-extralight px-3 py-4 text-sm border border-[#e8eae8] rounded-lg  hover:border-[#017e48] focus:border-2 focus:border-[#017e48]">
            <option value="InvestorType">Investor type</option>
            <option value="individual">individual</option>
            <option value="Entity">Entity</option>
          </select>
        </div> */}
        {/* <div className="flex justify-center items-center mt-5 text-black">
          <select name="Invest" className="w-full font-extralight px-3 py-4 text-sm border border-[#e8eae8] rounded-lg  hover:border-[#017e48] focus:border-2 focus:border-[#017e48]">
            <option value="invest">How much are you looking to invest?</option>
            <option value="$500k-$5M">$500k-$5M</option>
            <option value="$5M-$10M">$5M-$10M</option>
            <option value="$10M-$50M">$10M-$50M</option>
            <option value="$50M+">$50M+</option>
          </select>
        </div> */}
        <div>
          {/* <div className="flex items-center py-5">
            <input type="checkbox" className="w-6 h-6 border-2 border-gray-300 " />
            <label className="text-black px-3 font-extralight text-sm">I am a non-US investor.</label>
            <br />
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="w-6 h-6 border-2 border-gray-100 " />
            <label className="text-black px-3 font-extralight text-sm">
              I agree to Anemoy's <span>Privacy Policy.</span>
            </label>
          </div> */}
        </div>
        <div className="mt-7">
          <button className="px-12 py-4 text-white bg-[#232523] hover:bg-green-900 rounded-full">Learn more</button>
        </div>
      </form>
    </div>
  );
};

export default ContectUs;
