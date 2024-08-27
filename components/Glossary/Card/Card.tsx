"use client";

import React from "react";
import CardContent from "./CardContent";
import ContentWrapper from "@/components/Blog/ContentWrapper";

const Card = () => {
  return (
    <ContentWrapper>
      <div>
        <div className="flex justify-end lg:px-24 py-0">
          <div className="text-6xl pb-2 textColor">#</div>
        </div>
        <div className="grid grid-cols-1 gap-12">
          <CardContent />
          <CardContent />
          <CardContent />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Card;
