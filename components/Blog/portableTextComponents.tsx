import React from "react";
import { urlFor } from "@/client";
import { PortableText } from "@portabletext/react";

export const serverComponents: any = {
  types: {
    image: ({ value }: { value: any }) => <img src={urlFor(value).url()} alt={value.alt || ""} className="rounded-lg mx-auto shadow-lg max-w-full h-[400px]" />,
    customBlock: ({ value }: { value: any }) => {
      const { blockType, customId, content } = value;
      const Component = blockType === "paragraph" ? "p" : blockType;
      return React.createElement(Component, { id: customId, className: `custom-block custom-block-${blockType}` }, content);
    },
    columns: ({ value }: { value: any }) => {
      const getColumnClass = (layout: string, index: number, totalColumns: number) => {
        if (totalColumns === 2) {
          switch (layout) {
            case "oneThirdTwoThirds":
              return index === 0 ? "basis-full md:basis-1/3" : "basis-full md:basis-2/3";
            case "twoThirdsOneThird":
              return index === 0 ? "basis-full md:basis-2/3" : "basis-full md:basis-1/3";
            default:
              return "basis-full md:basis-1/2";
          }
        }
        // For 3 columns
        return "basis-full md:basis-1/3";
      };

      return (
        <div className="flex flex-col md:flex-row md:gap-2 my-8">
          {value.columns.map((column: any, index: number) => (
            <div key={index} className={`${getColumnClass(value.layout, index, value.columns.length)} px-1`}>
              <div className="prose max-w-none text-[#232523]">
                <PortableText value={column.content} components={serverComponents} />
              </div>
            </div>
          ))}
        </div>
      );
    },
  },
  block: {
    normal: ({ children }: { children: any }) => <p className="text-[#232523] mb-4">{children}</p>,
    h1: ({ children }: { children: any }) => <h1 className="text-[#232523] font-bold text-3xl sm:text-5xl py-5">{children}</h1>,
    h2: ({ children }: { children: any }) => <h2 className="text-[#232523] font-bold text-2xl sm:text-4xl py-5">{children}</h2>,
    h3: ({ children }: { children: any }) => <h3 className="text-[#232523] font-bold text-3xl py-2">{children}</h3>,
    h4: ({ children }: { children: any }) => <h4 className="text-[#232523] font-bold text-2xl py-2">{children}</h4>,
    blockquote: ({ children }: { children: any }) => <blockquote className="border-l-4 border-[#017e48] pl-4 italic my-4">{children}</blockquote>,
    bullet: ({ children }: { children: any }) => <li className="text-[#232523] ml-4">{children}</li>,
    number: ({ children }: { children: any }) => <li className="text-[#232523] ml-4">{children}</li>,
  },
  list: {
    bullet: ({ children }: { children: any }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
    number: ({ children }: { children: any }) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
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
