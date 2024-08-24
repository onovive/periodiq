import React from "react";
import Card from "./Card";
import ContentWrapper from "../ContentWrapper";

const CardSection = () => {
  return (
    <ContentWrapper>
      <div className="grid gap-4 py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </ContentWrapper>
  );
};

export default CardSection;
