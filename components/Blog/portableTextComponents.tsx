// portableTextComponents.tsx
import React from "react";
import { urlFor } from "@/client";

export const serverComponents: any = {
  types: {
    image: ({ value }: { value: any }) => <img src={urlFor(value).url()} alt={value.alt || ""} className="rounded-lg mx-auto shadow-lg my-4 max-w-full h-[400px]" />,
    customBlock: ({ value }: { value: any }) => {
      const { blockType, customId, content } = value;
      const Component = blockType === "paragraph" ? "p" : blockType;
      return React.createElement(Component, { id: customId, className: `custom-block custom-block-${blockType}` }, content);
    },
  },
  block: {
    normal: ({ children }: { children: any }) => <p className="text-[#232523] mb-4">{children}</p>,
    h1: ({ children }: { children: any }) => <h1 className="text-[#232523] font-bold text-3xl sm:text-5xl py-5">{children}</h1>,
    h2: ({ children }: { children: any }) => <h2 className="text-[#232523] font-bold text-2xl sm:text-4xl py-5">{children}</h2>,
    h3: ({ children }: { children: any }) => <h3 className="text-[#232523] font-bold text-3xl py-2">{children}</h3>,
    h4: ({ children }: { children: any }) => <h4 className="text-[#232523] font-bold text-2xl py-2">{children}</h4>,
    blockquote: ({ children }: { children: any }) => <blockquote className="border-l-4 border-[#017e48] pl-4 italic my-4">{children}</blockquote>,
  },
  marks: {
    strong: ({ children }: { children: any }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }: { children: any }) => <em className="italic">{children}</em>,
    link: ({ children, value }: { children: any; value: any }) => (
      <a href={value.href} target={value.blank ? "_blank" : undefined} rel={value.blank ? "noopener noreferrer" : undefined} className="text-[#017e48] hover:text-[#205f44] hover:underline">
        {children}
      </a>
    ),
    internalLink: ({ children, value }: { children: any; value: any }) => (
      <a href={`#${value.reference}`} className="text-[#017e48] hover:text-[#205f44] hover:underline js-internal-link">
        {children}
      </a>
    ),
  },
};
