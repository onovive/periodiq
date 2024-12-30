import React from "react";
import Card from "./Card";
import ContentWrapper from "../ContentWrapper";

const CardSection = ({ data, lang }: { data: any; lang: any }) => {
  return (
    <ContentWrapper>
      <div className="flex justify-center py-10 min-h-screen">
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-screen-xl">
          {data?.blogs?.map((blog: any) => (
            <Card key={blog?._id} blogData={blog} lang={lang} />
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default CardSection;
