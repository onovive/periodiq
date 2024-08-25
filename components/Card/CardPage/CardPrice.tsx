import PropTypes from "prop-types";
import Verification from "./Verify";
import PrizeCard from "./PrizeCard";
export default function PrizeCardMain({ data }: { data: any }) {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="py-4">
        <h2 className="text-2xl text-black font-semibold text-left">Prizes</h2>
        <div className="border-t-2 border-gray-300 my-4"></div>
        <PrizeCard title="1st Prize" description={data?.firstPrize} textColor="#CA8A04" bgColor="#FEF93C" size="large" />
        <PrizeCard title="2nd Prize" description={data?.secondPrize} textColor="#4B5563" bgColor="#F3F4F6" size="large" />
        <PrizeCard title="3rd Prize" description={data?.thirdPrize} textColor="#CA8A04" bgColor="#FEFCE8" size="large" />

        {/* <div className="border-t-2 border-gray-300 my-4"></div> */}

        {/* <div className="flex justify-between items-center">
          <span className=" text-black text-3xl font-bold">$29.99</span>
          <button className="bg-black text-white font-semibold py-2 px-4 rounded hover:bg-green-700 transition duration-300">Subscribe</button>
        </div> */}
      </div>
    </div>
  );
}
