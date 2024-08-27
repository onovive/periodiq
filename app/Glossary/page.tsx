import React from "react";
import Card from "@/components/Glossary/Card/Card";
import Hero from "@/components/Glossary/Hero/Hero";
import Footer from "@/components/Footer";
import { getGlossary } from "@/utils/query";
const page = async ({ searchParams }: { searchParams: any }) => {
  const glossary = searchParams.glossary ? searchParams.glossary : "";
  return (
    <div>
      <Hero />
      <Card glossary={glossary} />
      <div className="mt-8 sm:mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default page;
