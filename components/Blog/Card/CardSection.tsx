import React from "react";
import Card from "./Card";
import ContentWrapper from "../ContentWrapper";

const CardSection = ({ data }: { data: any }) => {
  console.log(data);
  return (
    <ContentWrapper>
      <div className="grid gap-4 py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {data?.blogs?.map((blog: any) => (
          <Card key={blog?._id} blogData={blog} />
        ))}
      </div>
    </ContentWrapper>
  );
};

export default CardSection;
