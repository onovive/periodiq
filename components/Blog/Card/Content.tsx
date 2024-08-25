import React from "react";

const Content = ({ data }: { data: any }) => {
  function formatDate(dateStr: string) {
    const date = new Date(dateStr);
    const options: {} = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <section className="flex flex-col gap-2 p-2 pt-3">
      <div>
        <p className="text-xs text-slate-600">{formatDate(data?.publishedAt)}</p>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-2xl font-bold leading-[24px] text-[#232523]">{data?.title}</h1>
        </div>
        <div>
          <p className="text-base leading-[20px] font-regular text-[#232523]">Discover how FinchTrade ensures real-time settlement of cryptocurrency transactions through advanced technology, smart contracts, and strategic partnerships. Learn about the benefits of instantaneous transactions, enhanced trading experience, and increased market confidence in the rapidly evolving world of crypto trading.</p>
        </div>
      </div>
    </section>
  );
};

export default Content;
