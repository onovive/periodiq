import React from "react";
import Card from "@/components/Glossary/Card/Card";
import Hero from "@/components/Glossary/Hero/Hero";
import Footer from "@/components/Footer";
import { getGlossaryPage, getHeaderFooter } from "@/utils/query";
// import { getGlossary } from "@/utils/query";
const Page = async ({ params, searchParams }: { params: any; searchParams: any }) => {
  const glossary = searchParams.glossary ? searchParams.glossary : "";
  const navs = await getHeaderFooter();
  const glossaryPage = await getGlossaryPage(params.lang);
  console.log("glossaryPage", glossaryPage);
  return (
    <div>
      <Hero header={navs?.header} heading={glossaryPage} />
      <Card lang={params.lang} glossary={glossary} />
      <div className="mt-8 sm:mt-20">
        <Footer footer={navs?.header} />
      </div>
    </div>
  );
};

export default Page;
