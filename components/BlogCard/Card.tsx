import React from "react";
import Image from "next/image";
import img1 from "./image/img.webp";

/*
Aug 14 2024
Understanding Market Liquidity: Key Concepts and S...
This article delves into the key concepts and strategies related to market liquidity, exploring its impact on asset pric...

Aug 13 2024
Case Study: INXY X FinchTrade
INXY is a B2B company offering payment solutions, specializing in enabling merchants to accept crypto payments and manag...

Aug 13 2024
Advantages of OTC Trading in Crypto Payment Proces...
This article explores the advantages of OTC trading in crypto payment processing, highlighting its benefits such as enha...




*/
interface CARDPROP {
  title: string,
  date: string,
  Discription: string,
  SmallScreen: Boolean

}


const Card: React.FC<CARDPROP> = ({ title, date, Discription, SmallScreen }) => {
  const discription = SmallScreen &&
    Discription.length > 80 ? `${Discription.substring(0, 80)} ...`
    : Discription
  return (
    <section className="h-[12rem] md:h-auto text-[#232523] rounded-3xl overflow-hidden md:shadow-lg transition-transform transform border border-[#2325231a] hover:border-[#232523]  p-5 pb-10">
      <div className="flex items-top gap-[2px]">
        <div className="">
          <p className="text-xs font-bold">{date}</p>
          <h1 className="text-sm font-bold">{title}</h1>
        </div>
        <div className="max-w-[70px]">
          <Image src={img1} alt="Crypto ECNs" className="w-full" />
        </div>
      </div>
      <div className="mt-3">
        <p className="text-xs text-gray-700">{discription}</p>
      </div>
    </section>
  );
};

export default Card;
