import React from "react";
import CardContent from "./CardContent";
import ContentWrapper from "@/components/Blog/ContentWrapper";
import { getGlossary } from "@/utils/query";

const Card = async ({ glossary }: { glossary: any }) => {
  const data = await getGlossary(glossary);

  const groupedData = data.glossary.reduce((acc: any, item: any) => {
    const firstLetter = item.title.charAt(0).toUpperCase();

    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(item);
    return acc;
  }, {});

  return (
    <ContentWrapper>
      <div className="min-h-screen ">
        {Object.keys(groupedData)
          .sort()
          .map((letter) => {
            if (letter?.toLowerCase() === glossary.toLowerCase()) {
              return (
                <>
                  <div key={letter}>
                    <div className="flex justify-end lg:px-48 py-3">
                      <div className="text-6xl pb-2 textColor">{letter}</div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {groupedData[letter].map((item: any, index: any) => (
                        <CardContent title={item?.title} description={item?.description} slug={item?.slug?.current} key={index} />
                      ))}
                    </div>
                  </div>
                </>
              );
            }
            if (glossary.toLowerCase() == "") {
              return (
                <>
                  <div key={letter}>
                    <div className="flex justify-end lg:px-48 py-3">
                      <div className="text-6xl pb-2 textColor">{letter}</div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {groupedData[letter].map((item: any, index: any) => (
                        <CardContent title={item?.title} description={item?.description} slug={item?.slug?.current} key={index} />
                      ))}
                    </div>
                  </div>
                </>
              );
            }
          })}
      </div>
    </ContentWrapper>
  );
};

export default Card;
