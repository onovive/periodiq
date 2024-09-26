import React from "react";
import Card from "./Card";
import ContentWrapper from "../Blog/ContentWrapper";

const Games = ({ lang, data }: { lang: any; data: any }) => {
  return (
    <ContentWrapper>
      <div className=" flex flex-col  justify-center">
        <div className=" sm:py-8">
          <h1 className="text-[32px] sm:text-[56px] leading-[48px] sm:leading-[70px] mt-2 text-[#232523] ">{data?.title}</h1>
        </div>
        <div className="grid gap-4 py-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data?.games?.map((game: any) => (
            <Card lang={lang} key={game?._key} data={game} prize={data} />
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Games;
