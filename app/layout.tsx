import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import localFont from "next/font/local";

const ttfirsNeue = localFont({
  src: [
    {
      path: "./fonts/tt_firs_neue/TT Firs Neue Trial Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/tt_firs_neue/TT Firs Neue Trial Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-tt-firs-neue",
});

export const metadata: Metadata = {
  title: {
    default: "PeriodiQ",
    template: "%s | PeriodiQ",
  },
  description: "PeriodiQ - Join exciting scavenger hunts and explore the world around you",
  icons: {
    icon: "/LOGO.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={ttfirsNeue.className}>
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          }
        >
          {children}
        </Suspense>
      </body>
    </html>
  );
}
