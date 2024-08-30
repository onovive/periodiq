import React from "react";
import Link from "next/link";
import Card from "./Card";
import NavHeader from "@/components/NavHeader";

const Hero = ({ header }: { header: any }) => {
  return (
    <section className="relative bg-cover bg-center px-0 2xl:px-32" style={{ backgroundImage: "url('banner.jpg')" }}>
      <div className="relative z-10">
        {/* Header with Logo and Nav */}
        <NavHeader data={header} />

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-between py-12 pt-24">
          <div className="py-5 px-1">
            <h1 className="text-4xl md:text-6xl font-extrabold gradient-text py-2">Glossary</h1>
          </div>
          <div>
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
