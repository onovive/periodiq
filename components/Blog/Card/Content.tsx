import ShortDate from "@/components/Glossary/shortDate";
import formatDate from "@/utils/function";
import React from "react";

const Content = ({ data }: { data: any }) => {
  return (
    <section className="flex flex-col gap-2 p-2 pt-3">
      <div>
        <div className="text-xs text-slate-600">
          {/* (data?.publishedAt) */}
          <ShortDate data={data?.publishedAt} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold leading-[24px] text-[#232523] ">{data?.title}</h1>
        </div>
        <div>
          <p className="text-base leading-[20px] font-regular text-[#232523] ">{data?.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Content;
