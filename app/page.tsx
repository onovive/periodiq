import Image from "next/image";

import client from "../client";
import toast, { Toaster } from "react-hot-toast";
import Banner from "@/components/Banner";
import Solutions from "@/components/Solutions";
import Offer from "@/components/Offer";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Section from "@/components/SecondSection/index";
import CardSection from "@/components/BlogCard/CardSection";
import CardDetail from "@/components/Card/Games";
import { getHomePage } from "@/utils/query";
import Games from "@/components/Card/Games";
export default async function Home() {
  const pageData = await getHomePage();
  console.log(pageData);
  return (
    <main className="relative">
      {pageData && (
        <>
          <Toaster />
          <Banner data={pageData?.banner} />
          {/* <Solutions /> */}
          <Section data={pageData?.benefits} />
          <Games data={pageData?.gamesSection} />
          <Contact data={pageData?.contactSection} />
          {/* <Offer /> */}
          <CardSection data={pageData?.blogsSection} />
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
