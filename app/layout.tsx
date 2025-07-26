import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"

import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import BackToTop from "./_components/BackToTop";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Teapresso 野萃",
  description: "Teapresso 野萃",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Analytics />
      <html lang="en">
        <body className={montserrat.className + " bg-white min-h-screen flex flex-col"}>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <BackToTop />
          <Footer />
        </body>
      </html>
    </>
  );
}
