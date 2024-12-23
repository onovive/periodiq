import Image from "next/image";

import client from "../../client";
import toast, { Toaster } from "react-hot-toast";
import Banner from "@/components/Banner";
import Solutions from "@/components/Solutions";
import Offer from "@/components/Offer";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Section from "@/components/SecondSection/index";
import CardSection from "@/components/BlogCard/CardSection";
import { getHeaderFooter, getHomePage } from "@/utils/query";
import Games from "@/components/Card/Games";
export default async function Home({ params }: { params: any }) {
  const pageData = await getHomePage(params.lang);
  const navs = await getHeaderFooter();
  return (
    <main className="relative">
      {pageData && (
        <>
          <Toaster />
          <Banner lang={params?.lang} header={navs?.header} data={pageData?.banner} />
          {/* <Solutions /> */}
          <Section data={pageData?.benefits} />
          <Games lang={params?.lang} data={pageData?.gamesSection} />
          <Contact data={pageData?.contactSection} />
          <CardSection lang={params?.lang} data={pageData?.blogsSection} />
          <Footer footer={navs?.header} />
        </>
      )}
    </main>
  );
}
