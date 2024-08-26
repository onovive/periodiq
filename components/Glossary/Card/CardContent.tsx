import React from "react";

interface CardIPROP {
  title: string,
  discription: string
}


const CardContent: React.FC<CardIPROP> = ({ title, discription }) => {
  return (
    <div className="lg:px-24">
      <div className="flex flex-col items-start text-black border rounded-xl px-6 py-5 hover:hover:border-[#232523] transition-shadow duration-300 ease-in-out">
        <div className="mb-2">
          <h1 className="text-2xl font-semibold text-[#232523] leading-6">{title}</h1>
        </div>
        <div>
          <p className="text-base leading-5 text-[#232523]">{discription}</p>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
