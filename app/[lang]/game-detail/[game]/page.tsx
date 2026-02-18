import React from "react";
import Card from "@/components/Card/CardPage/Home";
// import Header from '@/components/Card/CardPage/Header'
import PrizeCard from "@/components/Card/CardPage/PrizeCard";
import { getGamesDetail, getHeaderFooter } from "@/utils/query";
import GoogleAnalyticsWrapper from "@/components/GoogleAnalyticsWrapper";
// app/[lang]/game-detail/[game]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    game: string;
    lang: string;
  }>;
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { game: gameSlug, lang } = await params;
  const data = await getGamesDetail(gameSlug);
  const game = data?.games?.[0];
  if (!game) {
    return {
      title: "Game Not Found",
      description: "The requested game could not be found.",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://periodiq.co";

  return {
    title: game.title,
    description: game.description,
    alternates: {
      canonical: `${baseUrl}/${lang}/game-detail/${gameSlug}`,
    },
    openGraph: {
      title: game.title,
      description: game.description,
      type: "article",
      images: game.bannerImages[0]?.image
        ? [
            {
              url: game.bannerImages[0]?.image,
              width: 1200,
              height: 630,
              alt: game.title,
            },
          ]
        : [],
      locale: lang,
      modifiedTime: game._updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: game.title,
      description: game.description,
      images: game.bannerImages[0]?.image ? [game.bannerImages[0]?.image] : [],
    },
  };
}
const page = async ({ params }: { params: Promise<{ game: string; lang: string }> }) => {
  const { game, lang } = await params;
  const data = await getGamesDetail(game);

  if (!data?.games || data.games.length === 0) {
    notFound();
  }

  const navs = await getHeaderFooter();

  return (
    <>
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && <GoogleAnalyticsWrapper GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />}
      <div>
        <Card lang={lang} header={navs?.header} data={data?.games} />
      </div>
    </>
  );
};

export default page;
