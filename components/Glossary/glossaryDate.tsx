"use client";
import React from "react";
import { usePathname } from "next/navigation";

const GlossaryDate = ({ data }: any) => {
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : "it";

  const formatDate = (date: string) => {
    const dateObj = new Date(date);

    if (locale === "it") {
      // Italian date format
      const months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];

      const day = dateObj.getDate();
      const month = months[dateObj.getMonth()];
      const year = dateObj.getFullYear();

      return `${month} ${day}, ${year}`;
    } else {
      // English date format
      return new Date(date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    }
  };

  return (
    <div>
      <p className="pb-8">{formatDate(data)}</p>
    </div>
  );
};

export default GlossaryDate;
