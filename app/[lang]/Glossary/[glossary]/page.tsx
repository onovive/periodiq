import React from "react";
import Card from "@/components/Glossary/Card/Card";
import Hero from "@/components/Glossary/Hero/Hero";
import Footer from "@/components/Footer";
import { getGlossaryDetail, getHeaderFooter } from "@/utils/query";
import { PortableText } from "@portabletext/react";
import { serverComponents } from "@/components/Blog/portableTextComponents";
import ClientSideLinks from "@/components/Blog/ClientSideLinks";
import GlossaryDate from "../../../../components/Glossary/glossaryDate";
// app/[lang]/glossary/[glossary]/page.tsx
import { Metadata } from "next";

interface Props {
  params: {
    glossary: string;
  };
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getGlossaryDetail(params.glossary);
  const glossary = data?.glossary?.[0];

  if (!glossary) {
    return {
      title: "Glossary Not Found",
      description: "The requested glossary item could not be found.",
    };
  }

  return {
    title: glossary.title,
    description: glossary.description,
    openGraph: {
      title: glossary.title,
      description: glossary.description,
      type: "article",
      images: glossary.mainImage
        ? [
            {
              url: glossary.mainImage.asset.url,
              width: 1200,
              height: 630,
              alt: glossary.title,
            },
          ]
        : [],
      locale: params.glossary,
      modifiedTime: glossary._updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: glossary.title,
      description: glossary.description,
      images: glossary.mainImage ? [glossary.mainImage.asset.url] : [],
    },
  };
}
const Page = async ({ params }: { params: any }) => {
  const data = await getGlossaryDetail(params.glossary);
  const navs = await getHeaderFooter();
  return (
    <div>
      <Hero header={navs?.header} heading={navs?.glossaryPage} />
      <div className="mx-3 lg:mx-52  2xl:w-[1000px] 2xl:mx-auto  text-[#232523]">
        {data?.glossary?.map((glossary: any) => (
          <React.Fragment key={glossary._id}>
            <h1 className="text-[#232523] font-bold  text-3xl lg:text-5xl py-5 pb-8">{glossary?.title}</h1>
            <GlossaryDate data={glossary?._updatedAt} />
            <p className="pb-8"></p>
            <PortableText value={glossary?.body} components={serverComponents} />
            <ClientSideLinks />
          </React.Fragment>
        ))}
      </div>
      {/* <Card glossary={glossary} /> */}
      <div className="mt-8 sm:mt-20">
        <Footer footer={navs?.header} />
      </div>
    </div>
  );
};

export default Page;
