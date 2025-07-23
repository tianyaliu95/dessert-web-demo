import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import BackToTop from "./_components/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fluffy Fluffy Dessert Cafe",
  description: "Japanese Soufflé Pancakes & Desserts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-white min-h-screen flex flex-col"}>
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
