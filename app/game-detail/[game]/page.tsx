import React from "react";
import Card from "@/components/Card/CardPage/Home";
// import Header from '@/components/Card/CardPage/Header'
import PrizeCard from "@/components/Card/CardPage/PrizeCard";
import { getGamesDetail } from "@/utils/query";

const page = async ({ params }: { params: any }) => {
  const data = await getGamesDetail(params.game);
  //   console.log(data);
  console.log("params", params);
  return (
    <div>
      <Card data={data?.games} />
    </div>
  );
};

export default page;
