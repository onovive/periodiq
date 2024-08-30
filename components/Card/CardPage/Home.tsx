import Head from "next/head";
import Nav from "./Nav";
import Header from "./Header";
import Section from "./Section";
import Price from "./CardPrice";
import Footer from "@/components/Footer";
// import PrizeCard from "./PrizeCard";
import Link from "next/link";
import NavHeader from "@/components/NavHeader";
import { PortableText } from "@portabletext/react";
import formatDate from "@/utils/function";
const howToPlayComponents: any = {
  list: {
    bullet: ({ children }: { children: any }) => <ul className="list-disc list-inside [&+h1]:mt-9 mt-5">{children}</ul>,
    number: ({ children }: { children: any }) => <ul className="list-decimal list-inside [&+h1]:mt-9">{children}</ul>,
  },

  block: {
    h1: ({ children }: { children: any }) => <h1 className="py-5">{children}</h1>,
    p: ({ children }: { children: any }) => <p className="py-5">{children}</p>,
    ul: ({ children }: { children: any }) => <ul className="list-disc list-inside pl-4">{children}</ul>,
    li: ({ children }: { children: any }) => <li className="text-[#232523] text-lg mb-2">{children}</li>,
  },
};
export default function Home({ data, header }: { data: any; header: any }) {
  console.log(data);
  return (
    <>
      <div>
        {/* <div className="container mx-auto px-4 py-4">
                <Nav />
            </div> */}
        {data &&
          data?.map((game: any) => (
            <>
              <section className="relative bg-cover bg-center px-0 2xl:px-32" style={{ backgroundImage: "url('banner.jpg')" }}>
                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

                {/* Container for content and overlay */}
                <div className="relative h-full">
                  {/* Header with Logo and Nav */}
                  <div>
                    <NavHeader data={header} />
                  </div>
                  {/* Hero Content */}
                </div>
              </section>
              <main className="lg:container lg:mx-auto lg:px-4 py-8">
                <div className="grid gap-8 lg:grid-cols-3 items-start justify-center ">
                  {/* Left Column (2/3 of the grid on large screens) */}
                  <div className="lg:col-span-2 space-y-8 text-[#232523]">
                    <main className="lg:col-span-2 space-y-8 lg:container lg:mx-auto px-4 md:px-0 py-8 pt-24">
                      <Header data={game?.bannerImages} />
                    </main>
                    <div className="w-full px-5 lg:px-0">
                      <h2 className="text-[32px] sm:text-[40px] leading-[48px] sm:leading-[56px] font-bold mt-[-60px] text-[#232523] mb-2">{game?.title}</h2>
                      <p className="text-sm md:text-xl text-gray-500">{game?.location}</p>
                    </div>

                    <Section title={game?.gameDescriptionTitle}>
                      <PortableText value={game?.gameDescription} />
                    </Section>

                    <div className="w-full h-0.5 bg-gray-300"></div>

                    <Section title={game?.howToPlayTitle}>
                      <PortableText value={game?.howToPlay} components={howToPlayComponents} />
                    </Section>

                    <div className="w-full h-0.5 bg-gray-300"></div>

                    <Section title={game?.rulesTitle}>
                      <PortableText value={game?.rules} components={howToPlayComponents} />
                    </Section>
                  </div>

                  {/* Right Column (1/3 of the grid on large screens) */}
                  <div className="space-y-8 lg:pt-24  px-5 lg:px-0">
                    <div className="grid grid-cols-1 gap-2 shadow-lg rounded-lg">
                      <div className="bg-gradient-to-r from-[#252625ce] to-[#232523] text-white rounded-lg shadow-md p-6 text-center">
                        <h3 className="text-2xl font-semibold mb-4">{game?.cta?.ctaTitle}</h3>
                        <Link target={"_blank"} href={game?.cta?.ctaButtonUrl}>
                          <button className="register-button bg-white text-[#232523] font-bold py-3 px-6 rounded-full hover:bg-[#bfbdbd] transition duration-300">{game?.cta?.ctaButton}</button>
                        </Link>
                      </div>
                    </div>
                    <div className="flex  flex-col-reverse lg:flex-col gap-7">
                      <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
                        <Section title={game?.eventDetails?.eventDetailTitle}>
                          <div className="border-t-2 border-gray-300 my-4"></div>
                          <ul className="space-y-4 text-gray-700">
                            <li className="flex ">
                              <div className="w-5">
                                {" "}
                                <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414" clip-rule="evenodd" viewBox="0 0 32 32" id="date">
                                  <path fill="none" d="M0 0h32v32H0z"></path>
                                  <path d="M16.999 6.995v.999c-.018.886-1.451 1.391-1.904.423a1.053 1.053 0 0 1-.094-.423v-.999h-2.996c-.769-.037-1.284-1.042-.755-1.653.182-.21.329-.324.755-.345.998 0 1.997-.003 2.996-.009v-.989a.87.87 0 0 1 .05-.313c.132-.401.527-.686.969-.686.533.021.967.42.979.999v.977c1.997-.012 3.995-.023 5.993-.013v-.964c.01-.534.4-.976.979-.999h.039c.534.021.968.42.979.999v.982l1.073.017c1.531.048 2.893 1.365 2.922 2.959.038 6.017.038 12.035 0 18.053-.028 1.545-1.365 2.929-2.959 2.959-6.683.041-13.367.041-20.05 0-1.539-.029-2.929-1.339-2.959-2.959-.038-6.018-.038-12.036 0-18.053.028-1.556 1.361-2.949 2.993-2.96h1.002v-.998a.848.848 0 0 1 .05-.313c.132-.401.527-.686.968-.686.534.021.968.42.979.999v3.995c-.017.885-1.409 1.381-1.886.459a1.036 1.036 0 0 1-.111-.459V6.991a43.672 43.672 0 0 0-1.024.004c-.507.016-.958.46-.974.974a485.855 485.855 0 0 0 0 18.028c.016.508.46.958.974.974a539.08 539.08 0 0 0 20.026 0c.507-.016.958-.46.974-.974.111-6.008.111-12.02 0-18.028a1.035 1.035 0 0 0-1.002-.974h-.996v.999c-.017.877-1.413 1.372-1.886.459a1.05 1.05 0 0 1-.111-.459v-.999h-5.993Zm-8.99 15.981a1 1 0 1 1 0 1.999 1 1 0 0 1 0-1.999Zm3.996 0a1 1 0 1 1-.002 1.998 1 1 0 0 1 .002-1.998Zm3.995 0a1 1 0 0 1 0 1.998 1 1 0 0 1 0-1.998Zm-7.991-3.995a.999.999 0 1 1 0 1.997.999.999 0 0 1 0-1.997Zm3.996 0a.998.998 0 1 1 0 1.997.998.998 0 0 1 0-1.997Zm3.995 0a1 1 0 1 1 0 1.999 1 1 0 0 1 0-1.999Zm3.995 0a1 1 0 1 1 0 1.999 1 1 0 0 1 0-1.999Zm3.995 0a.999.999 0 1 1 0 1.997.999.999 0 0 1 0-1.997Zm-11.985-3.995a.998.998 0 1 1 0 1.996.998.998 0 0 1 0-1.996Zm3.995 0a1 1 0 1 1 0 1.998 1 1 0 0 1 0-1.998Zm3.995 0a1 1 0 1 1 0 1.998 1 1 0 0 1 0-1.998Zm3.995 0a.998.998 0 1 1 .001 1.997.998.998 0 0 1-.001-1.997Z"></path>
                                </svg>
                              </div>
                              <strong className="ml-2 mr-2">{game?.eventDetails?.dateTitle}:</strong> {formatDate(game?.eventDetails?.date)}
                            </li>
                            <li className="flex">
                              <div className="w-5 h-5">
                                <svg viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
                                  <path fill="#232523" fill-rule="evenodd" d="M207.960546,159.843246 L210.399107,161.251151 C210.637153,161.388586 210.71416,161.70086 210.580127,161.933013 C210.442056,162.172159 210.144067,162.258604 209.899107,162.117176 L207.419233,160.68542 C207.165323,160.8826 206.846372,161 206.5,161 C205.671573,161 205,160.328427 205,159.5 C205,158.846891 205.417404,158.291271 206,158.085353 L206,153.503423 C206,153.22539 206.231934,153 206.5,153 C206.776142,153 207,153.232903 207,153.503423 L207,158.085353 C207.582596,158.291271 208,158.846891 208,159.5 C208,159.6181 207.986351,159.733013 207.960546,159.843246 Z M206.5,169 C211.746705,169 216,164.746705 216,159.5 C216,154.253295 211.746705,150 206.5,150 C201.253295,150 197,154.253295 197,159.5 C197,164.746705 201.253295,169 206.5,169 Z" transform="translate(-197 -150)" />
                                </svg>
                              </div>
                              <strong className="ml-2  mr-2">{game?.eventDetails?.timeTitle}:</strong> {game?.eventDetails?.time}
                            </li>
                            <li className="flex">
                              <div className="w-5 h-5">
                                <svg fill="#232523" width="18px" height="18px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>
                                </svg>
                              </div>
                              <strong className="ml-2  mr-2">{game?.eventDetails?.locationTitle}:</strong> {game?.eventDetails?.location}
                            </li>
                            <li className="flex">
                              <div className="w-5 h-5">
                                <svg fill="#232523" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6.108,20H4a1,1,0,0,0,0,2H20a1,1,0,0,0,0-2H17.892c-.247-2.774-1.071-7.61-3.826-9,2.564-1.423,3.453-4.81,3.764-7H20a1,1,0,0,0,0-2H4A1,1,0,0,0,4,4H6.17c.311,2.19,1.2,5.577,3.764,7C7.179,12.39,6.355,17.226,6.108,20ZM9,16.6c0-1.2,3-3.6,3-3.6s3,2.4,3,3.6V20H9Z" />
                                </svg>
                              </div>
                              <strong className="ml-2  mr-2">{game?.eventDetails?.durationTitle}:</strong> {game?.eventDetails?.duration}
                            </li>
                            <li className="flex">
                              <div className="w-5 h-5">
                                <svg fill="#232523" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231.5 256">
                                  <path
                                    d="M211.3,56c11.2,0,20.3,9.1,20.3,20.3s-9.1,20.3-20.3,20.3S191,87.4,191,76.2S200.1,56,211.3,56z M183,86.5
	c-5.1-3.8-12.4-5.1-19.6-2.3c-12.3,4.8-51.8,21-67.2,27.4c-5.3,2.2-7.9,8.3-5.7,13.7l0,0c2.2,5.4,8.3,7.9,13.7,5.8l30.3-12.3
	l-14.9,19.9c-1.8,2.5-2.8,4.8-3.4,7.2l-14.4,54.7c-0.1,0.5-0.4,0.9-0.7,1.2l-35.9,34.1c-3.5,3.3-4.5,8.2-3,12.5H0v7.9h173.7
	c6.5,0,11.8-5.3,11.8-11.8v-42.7c0-6.6-2.5-12.9-6.9-17.7l-24.3-26.2l32.7-43.8C193.4,105.2,191.6,92.9,183,86.5z M161.9,201.6v42.7
	c0,1.4,0.2,2.7,0.7,3.9H86.2l31.1-29.5c3.6-3.4,6.1-7.7,7.3-12.4l9.4-35.8l27.3,29.4C161.7,200.3,161.9,200.9,161.9,201.6z"
                                  />
                                  <path
                                    id="Layer_1_1_"
                                    d="M120.8,86.2c23.5-1.4,41.3-21.6,39.8-45.1C159.2,17.5,139-0.3,115.5,1.2C92,2.6,74.2,22.9,75.7,46.3
	C77.1,69.7,97.3,87.6,120.8,86.2z M108.6,34.9c-1.2-2.3,2.2-3.6,3.9-5.3c2.2-2.3,6.9-6.1,6.3-7.5c-0.5-1.5-5.3-5.8-7.9-4.8
	c-0.5,0-3.6,3.4-4.2,3.9c0-1.2-0.2-1.8-0.2-2.9c0-0.8-1.5-1.4-1.4-2c0.1-1.3,3.4-3.8,4.1-4.8c-0.7-0.4-2.8-2-3.4-1.7
	c-1.4,0.8-3.2,1.3-4.7,2c0-0.5-0.1-1.1-0.2-1.4c2.9-1.5,6.1-2.6,9.4-3.4l2.9,1.1l2.2,2.3l2.2,2.1c0,0,1.3,0.5,1.8,0.5
	c0.7-0.1,2.7-2.8,2.7-2.8l-0.9-2.1l-0.1-1.8c5.9,0.5,11.3,2.3,16.2,5.3c-0.8,0.1-1.8,0.2-2.8,0.5c-0.4-0.2-2.7,0.2-2.6,1.2
	c0.1,0.8,4.1,4,5.9,6.9c1.7,2.9,6.6,4.8,7.5,8c0.9,3.8-0.5,8.7,0.1,13.3c0.7,4.5,5.5,9.1,5.5,9.1s2.2,0.7,3.9,0.2
	c-1.3,6.6-4.2,12.7-8.8,17.9c-5.1,5.8-11.5,9.8-18.8,11.5c0.9-2.6,2.6-5.1,4.2-6.5c1.4-1.3,3.2-3.6,3.8-5.3c0.7-1.8,1.5-3.4,2.6-5.1
	c1.3-2.3-4-5.5-5.8-6.1c-3.9-1.4-6.9-3.4-10.2-5.5c-2.5-1.5-10,2-12.8,0.9c-3.8-1.4-5.1-2.6-8.5-4.8c-3.5-2.3-2.5-7.2-2.7-10.8
	c2.6,0,6.2-1.1,8,0.9c0.5,0.7,2.6,3.4,3.8,2.3C111,39,109.1,35.7,108.6,34.9z M87.8,21.6c0.2,1.8,1.2,3.3,1.2,4.6
	c0,5.1-0.4,8.2,2.8,12.2c1.3,1.5,1.7,3.9,2.3,5.9c0.7,1.8,2.8,2.7,4.5,3.8c3.2,2.1,6.2,4.7,9.6,6.5c2.2,1.2,3.5,1.8,3.2,4.5
	c-0.4,2.1-0.4,3.4-1.4,5.3c-0.2,0.7,1.5,4.1,2.1,4.6c1.7,1.4,3.4,2.8,5.2,4.1c2.8,2.1,0,5.1-1.1,8.3c-8.3-0.5-16.2-3.8-22.6-9.4
	c-7.5-6.6-12-15.9-12.6-25.8C80.1,37,82.3,28.6,87.8,21.6z"
                                  />
                                </svg>
                              </div>
                              <strong className="ml-2  mr-2">{game?.eventDetails?.difficultyTitle}:</strong> {game?.eventDetails?.difficulty}
                            </li>
                          </ul>
                        </Section>
                      </div>

                      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <Price data={game?.prizes} />
                      </div>
                    </div>
                    {/* <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
              <Section title="What to Bring">
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Comfortable walking shoes</li>
                  <li>Weather-appropriate clothing</li>
                  <li>Water and snacks</li>
                  <li>Smartphone with data plan (optional)</li>
                  <li>Camera (optional)</li>
                  <li>Small backpack or bag</li>
                </ul>
              </Section>
            </div> */}
                  </div>
                </div>
              </main>
            </>
          ))}
        <Footer footer={header} />
      </div>
    </>
  );
}
