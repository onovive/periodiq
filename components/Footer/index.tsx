"use client";
import React from "react";
import Link from "next/link";
type Props = {};
import { usePathname } from "next/navigation";
const Footer = ({ footer }: { footer: any }) => {
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : "it"; //
  return (
    <>
      <section className="relative bg-cover bg-center px-0 2xl:px-32" style={{ backgroundImage: "url('footer.jpg')" }}>
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

        {/* Container for content and overlay */}
        <div className="relative z-10 flex flex-col justify-center">
          {/* Header with Logo and Nav */}
          <footer className="flex flex-col-reverse md:flex-row justify-between items-center gap-5 p-5 py-10    border-t border-[#2325231a]">
            <div className="flex items-center text-center sm:text-left text-[#232523] ">{footer?.footer?.copyrights}</div>
            <Link href="https://www.instagram.com/periodiq.co/" target="_blank" rel="noopener noreferrer" className="text-[#232523] font-extralight text-lg hover:text-[#1DA1F2]">
              <div className="inline-block" style={{ marginBottom: "-5px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="#232523" />
                </svg>
              </div>
            </Link>
            <nav className="sm:space-x-8 flex flex-col gap-3 sm:gap-0 sm:flex-row items-center justify-center">
              {footer?.footer?.footerLinks?.map((footer: any, index: any) => (
                <Link key={index} href={`/${locale}${footer?.link}`} className="text-[#232523] font-extralight text-lg">
                  {footer?.title}
                </Link>
              ))}

              {/* <Link href="/blogs" className="text-[#232523] font-extralight text-lg">
                Knowledge Hub
              </Link>
              <Link href="/Glossary" className="text-[#232523] font-extralight text-lg">
                Glossary
              </Link> */}
              {/* <Link href="#" className="text-[#232523] font-extralight text-lg">
                blog
              </Link> */}
              {/* <Link href="#" className="text-[#232523] font-extralight text-lg">
                App
              </Link> */}
              {/* <Link href="#" className="text-[#232523] font-extralight text-lg">
                <div className="inline-block" style={{ marginBottom: "-5px" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.6875 2C21.4512 2 22.125 2.67383 22.125 3.48242V20.6875C22.125 21.4961 21.4512 22.125 20.6875 22.125H3.39258C2.62891 22.125 2 21.4961 2 20.6875V3.48242C2 2.67383 2.62891 2 3.39258 2H20.6875ZM8.06445 19.25V9.68164H5.09961V19.25H8.06445ZM6.58203 8.33398C7.52539 8.33398 8.28906 7.57031 8.28906 6.62695C8.28906 5.68359 7.52539 4.875 6.58203 4.875C5.59375 4.875 4.83008 5.68359 4.83008 6.62695C4.83008 7.57031 5.59375 8.33398 6.58203 8.33398ZM19.25 19.25V13.9941C19.25 11.4336 18.666 9.41211 15.6562 9.41211C14.2188 9.41211 13.2305 10.2207 12.8262 10.9844H12.7812V9.68164H9.95117V19.25H12.916V14.5332C12.916 13.2754 13.1406 12.0625 14.7129 12.0625C16.2402 12.0625 16.2402 13.5 16.2402 14.5781V19.25H19.25Z" fill="#232523" />
                  </svg>
                </div>
              </Link> */}
            </nav>
          </footer>
        </div>
      </section>
    </>
  );
};

export default Footer;
