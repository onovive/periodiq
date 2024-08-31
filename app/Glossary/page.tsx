import React from "react";
import Card from "@/components/Glossary/Card/Card";
import Hero from "@/components/Glossary/Hero/Hero";
import Footer from "@/components/Footer";
import { getHeaderFooter } from "@/utils/query";
// import { getGlossary } from "@/utils/query";
const Page = async ({ searchParams }: { searchParams: any }) => {
  const glossary = searchParams.glossary ? searchParams.glossary : "";
  const navs = await getHeaderFooter();
  return (
    <div>
      <Hero header={navs?.header} heading={navs?.glossaryPage} />
      <Card glossary={glossary} />
      <div className="mt-8 sm:mt-20">
        <Footer footer={navs?.header} />
      </div>
    </div>
  );
};

export default Page;
