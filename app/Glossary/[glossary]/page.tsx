import React from "react";
import Card from "@/components/Glossary/Card/Card";
import Hero from "@/components/Glossary/Hero/Hero";
import Footer from "@/components/Footer";
import { getGlossaryDetail, getHeaderFooter } from "@/utils/query";
import { PortableText } from "@portabletext/react";
const myPortableTextComponents: any = {
  //   types: {
  //     image: ({ value }) => <img src={urlFor(value).url()} alt={value.alt || ""} className={styles.blogImage} />,
  //   },
  block: {
    h1: ({ children }: { children: any }) => <h1 className="text-[#232523] font-bold text-3xl sm:text-5xl py-5">{children}</h1>,
    h2: ({ children }: { children: any }) => <h2 className="text-[#232523] font-bold  text-2xl sm:text-4xl py-5">{children}</h2>,
    h3: ({ children }: { children: any }) => <h3 className="text-[#232523] font-bold text-3xl py-2">{children}</h3>,
    h4: ({ children }: { children: any }) => <h4 className="text-[#232523] font-bold text-2xl py-2">{children}</h4>,
    h5: ({ children }: { children: any }) => <h5 className="text-[#232523] font-bold text-xl py-2">{children}</h5>,
    p: ({ children }: { children: any }) => <p className="text-[#232523]">{children}</p>,
    b: ({ children }: { children: any }) => <b className="text-[#232523] font-bold text-5xl">{children}</b>,
    strong: ({ children }: { children: any }) => <strong className="text-[#232523] font-bold text-5xl">{children}</strong>,
    a: ({ children }: { children: any }) => <a className="text-[#232523] font-bold">{children}</a>,
  },
};
const Page = async ({ params }: { params: any }) => {
  const data = await getGlossaryDetail(params.glossary);
  const navs = await getHeaderFooter();
  return (
    <div>
      <Hero header={navs?.header} heading={navs?.glossaryPage} />
      <div className="mx-3 lg:mx-36 text-[#232523]">
        {data?.glossary?.map((glossary: any) => (
          <React.Fragment key={glossary._id}>
            <h1 className="text-[#232523] font-bold  text-3xl lg:text-5xl py-5 pb-8">{glossary?.title}</h1>
            <PortableText value={glossary?.body} components={myPortableTextComponents} />
          </React.Fragment>
        ))}
      </div>
      {/* <Card glossary={glossary} /> */}
      <div className="mt-8 sm:mt-20">
        <Footer footer={navs?.header} />
      </div>
    </div>
  );
};

export default Page;
