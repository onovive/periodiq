"use client";
import React from "react";
import { usePathname } from "next/navigation";

const ShortDate = ({ data }: any) => {
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : "it";

  const formatDate = (date: string) => {
    const dateObj = new Date(date);

    if (locale === "it") {
      // Italian date format
      const months = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];

      const day = dateObj.getDate();
      const month = months[dateObj.getMonth()];
      const year = dateObj.getFullYear();

      return `${month} ${day}, ${year}`;
    } else {
      // English date format
      return new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    }
  };

  return (
    <div>
      <p className="">{formatDate(data)}</p>
    </div>
  );
};

export default ShortDate;
