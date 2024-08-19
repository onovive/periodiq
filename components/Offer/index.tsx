import React from "react";
import Link from "next/link";
type Props = {};

const Offer = (props: Props) => {
  return (
    <section className="mx-5 font-manrope my-32">
      <div className="bg-[#017e48] text-[#f9f6f1] flex flex-col md:flex-row">
        <div className="basis-3/5 py-24 px-4 sm:px-0 sm:pl-20 sm:pr-12">
          <h2 className="text-3xl font-bold leading-9">Anemoy Launches Onchain U.S. Treasury Bills Offering</h2>
          <p className="text-[20px] mt-4 mb-4 leading-[32px] font-extralight">Today Anemoy, a web3 native asset manager that provides exposure to a spectrum of superior assets, launched its first pool on Centrifuge, a short-term Liquid Treasury Fund. The regulated, fully onchain, and actively managed fund provides direct access to US Treasury Yield, empowering investors to earn returns on idle stablecoins..</p>
          <Link href={"/"} className="text-xl text-[#b3d9c8] underline underline-offset-1">
            Learn More
          </Link>
        </div>
        <div className="basis-2/5 flex flex-col justify-end">
          <div className="mx-auto sm:mx-0">
            <img className="w-[350px] sm:w-[457px]" src="https://cdn.prod.website-files.com/64c27655f6c395d4c6a0ed33/65673c26c95df399801917a5_onchain-us-treasury-bills-offering.jpg" alt="fsda" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
