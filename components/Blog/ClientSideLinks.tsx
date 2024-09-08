// ClientSideLinks.tsx
"use client";

import React, { useEffect } from "react";

// interface ClientSideLinksProps {
//   value: any;
// }

const ClientSideLinks: React.FC = () => {
  useEffect(() => {
    const handleInternalLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.classList.contains("js-internal-link")) {
        e.preventDefault();
        const id = target.getAttribute("href")?.slice(1);
        const element = document.getElementById(id || "");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleInternalLinkClick);

    return () => {
      document.removeEventListener("click", handleInternalLinkClick);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ClientSideLinks;
