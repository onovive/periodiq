import React from "react";
import Card from "@/components/Card/CardPage/Home";
// import Header from '@/components/Card/CardPage/Header'
import PrizeCard from "@/components/Card/CardPage/PrizeCard";
import { getGamesDetail, getHeaderFooter } from "@/utils/query";

const page = async ({ params }: { params: any }) => {
  const data = await getGamesDetail(params.game);
  const navs = await getHeaderFooter();

  return (
    <div>
      <Card lang={params.lang} header={navs?.header} data={data?.games} />
    </div>
  );
};

export default page;
