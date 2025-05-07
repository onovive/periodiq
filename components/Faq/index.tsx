"use client";

import React from "react";
import { PortableText } from "@portabletext/react";
import ContentWrapper from "../Blog/ContentWrapper";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

interface FaqItemProps {
  title: string;
  content: any;
  isOpen: boolean;
  toggleAccordion: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ title, content, isOpen, toggleAccordion }) => {
  return (
    <div className="border-b border-gray-700/30">
      <div className="flex justify-between items-center py-6 cursor-pointer" onClick={toggleAccordion}>
        <h3 className="text-xl font-medium flex items-center">
          <span className="mr-3">{isOpen ? <FiMinus size={20} /> : <FiPlus size={20} />}</span>
          {title}
        </h3>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="pb-6 pl-8 text-black">
              <PortableText value={content} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = ({ data }: { data: any }) => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);
  console.log("data", data);
  const toggleAccordion = (index: number) => {
    setOpenIndices((prev) => {
      // If the index is already in the array, remove it
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      }
      // Otherwise add it to the array
      return [...prev, index];
    });
  };

  if (!data?.faqItems || data.faqItems.length === 0) {
    return null;
  }

  // Split FAQ items into two columns
  const leftColumnItems = data.faqItems.slice(0, Math.ceil(data.faqItems.length / 2));
  const rightColumnItems = data.faqItems.slice(Math.ceil(data.faqItems.length / 2));

  return (
    <section className="text-black  pb-16 md:pb-24">
      <ContentWrapper>
        <div className=" sm:py-8">
          <h1 className="text-[32px] sm:text-[56px] leading-[48px] sm:leading-[70px] mt-2 text-[#232523] ">{data?.title}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-0">
          <div>
            {leftColumnItems.map((item: any, index: number) => (
              <FaqItem key={item._key || index} title={item.title} content={item.content} isOpen={openIndices.includes(index)} toggleAccordion={() => toggleAccordion(index)} />
            ))}
          </div>

          <div>
            {rightColumnItems.map((item: any, index: number) => {
              // Adjust index to account for left column items
              const actualIndex = index + leftColumnItems.length;
              return <FaqItem key={item._key || actualIndex} title={item.title} content={item.content} isOpen={openIndices.includes(actualIndex)} toggleAccordion={() => toggleAccordion(actualIndex)} />;
            })}
          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default Faq;
