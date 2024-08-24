import React from "react";
import Card from "./Card";
import ContentWrapper from "../Blog/ContentWrapper";

const CardSection = () => {
  return (
    <ContentWrapper>
      <div className="pb-20">
        <div className="  px-1">
          <h1 className="text-[#232523]  text-[32px] sm:text-[56px] leading-[48px] sm:leading-[70px] mt-2 ">BLOGS</h1>
        </div>
        <div className="grid grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-4 gap-7 pt-24">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default CardSection;
