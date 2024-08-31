import React from "react";

interface PrizeCardProps {
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  size?: "small" | "medium" | "large";
}

const PrizeCard: React.FC<PrizeCardProps> = ({ title, description, bgColor, size, textColor }) => {
  return (
    <div className={`opacity-70 relative rounded `}>
      <div
        className="absolute w-full h-[100%] rounded-md"
        style={{
          backgroundColor: bgColor,
          opacity: 0.6,
        }}
      ></div>
      <div className="relative text-black px-5 py-4 my-3">
        <div className="flex flex-col items-start">
          <h1 className="font-bold py-3 text-2xl">{title}</h1>
          <p
            className="text-3xl py-2 font-bold leading-[15px]"
            style={{
              color: textColor,
              opacity: 1,
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrizeCard;
