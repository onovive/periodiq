import React from "react";
import Card from "./Card";
import ContentWrapper from "../ContentWrapper";

const CardSection = ({ data }: { data: any }) => {
  return (
    <ContentWrapper>
      <div className="flex justify-center py-10">
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-screen-xl">
          {data?.blogs?.map((blog: any) => (
            <Card key={blog?._id} blogData={blog} />
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default CardSection;
