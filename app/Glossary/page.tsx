import React from "react";
import Card from "@/components/Glossary/Card/Card";
import Hero from "@/components/Glossary/Hero/Hero";
import Footer from "@/components/Footer";
const page = () => {
  return (
    <div>
      <Hero />
      <Card />
      <div className="mt-40">
        <Footer />
      </div>
    </div>
  );
};

export default page;
