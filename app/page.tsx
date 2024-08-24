import Image from "next/image";

import client from "../client";
import toast, { Toaster } from "react-hot-toast";
import { getPageData } from "@/utils/query";
import Banner from "@/components/Banner";
import Solutions from "@/components/Solutions";
import Offer from "@/components/Offer";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Section from "@/components/SecondSection/index";
import CardSection from "@/components/BlogCard/CardSection";
import CardDetail from "@/components/Card/CardSection";
export default async function Home() {
  const pageData = await getPageData();

  return (
    <main className="relative">
      {pageData && (
        <>
          <Toaster />
          <Banner />
          <Solutions />
          <Section />
          <Contact />
          <CardDetail />
          <Offer />
          <CardSection />
          <Footer />
          {/* <ScrollToTop />
          <Banner header={pageData?.header} data={pageData?.home?.banner} services={pageData?.home?.servicesSection} industries={pageData?.home?.industriesSection} /> */}
          {/* <Industries data={pageData?.home?.industriesSection} />
          <OurServices data={pageData?.home?.servicesSection} />
          <OpenPosition data={pageData?.home?.jobsSection} />
          <Technologies data={pageData?.home?.technologiesSection} />
          <OurApproach data={pageData?.home?.methodologySection} />
          <AboutUs data={pageData?.home?.aboutSection} />
          <Maps data={pageData?.home?.locationSection} />
          <ContactUs data={pageData?.home?.contactSection} social={pageData?.socialMedia} />
          <Footer services={pageData?.home?.servicesSection} industries={pageData?.home?.industriesSection} social={pageData?.socialMedia} /> */}
        </>
      )}
    </main>
  );
}
