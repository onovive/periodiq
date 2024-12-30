import React from "react";
import Card from "@/components/Glossary/Card/Card";
import Hero from "@/components/Glossary/Hero/Hero";
import Footer from "@/components/Footer";
import { getGlossaryDetail, getHeaderFooter } from "@/utils/query";
import { PortableText } from "@portabletext/react";
import { serverComponents } from "@/components/Blog/portableTextComponents";
import ClientSideLinks from "@/components/Blog/ClientSideLinks";
import GlossaryDate from "../../../../components/Glossary/glossaryDate";

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
