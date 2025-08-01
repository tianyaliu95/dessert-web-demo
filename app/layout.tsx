import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"

import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import BackToTop from "./_components/BackToTop";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "700"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: {
    default: "Teapresso 野萃",
    template: "Teapresso 野萃"
  },
  description: "Experience the art of freshly brewed tea and coffee at Teapresso 野萃. Modern tea house serving handcrafted beverages, seasonal treats, and premium ingredients in Manchester, Leeds, and Glasgow. Your daily ritual destination.",
  keywords: [
    "tea house", "coffee shop", "bubble tea", "milk tea", "freshly brewed tea",
    "artisan coffee", "Manchester tea house", "Leeds coffee", "Glasgow cafe",
    "premium tea", "handcrafted beverages", "seasonal treats", "tea ritual",
    "modern tea house", "specialty drinks", "boba tea", "oolong tea", "matcha"
  ],
  authors: [{ name: "Teapresso Team" }],
  creator: "Teapresso 野萃",
  publisher: "Teapresso 野萃",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dessert-web-pi.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://dessert-web-pi.vercel.app',
    title: 'Teapresso 野萃',
    description: 'Experience the art of freshly brewed tea and coffee at Teapresso 野萃. Modern tea house serving handcrafted beverages and seasonal treats.',
    siteName: 'Teapresso 野萃',
    images: [
      {
        url: '/home.jpg',
        width: 1200,
        height: 630,
        alt: 'Teapresso Modern Tea House',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teapresso 野萃',
    description: 'Experience the art of freshly brewed tea and coffee at Teapresso 野萃.',
    images: ['/home.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico?v=3' },
      { url: '/favicon-16x16.png?v=3', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png?v=3', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png?v=3', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png?v=3', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png?v=3', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg?v=3', color: '#2e3f3a' },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'food and drink',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Analytics />
      <html lang="en-GB">
        <head>
          {/* Additional SEO Meta Tags */}
          <meta name="theme-color" content="#2e3f3a" />
          <meta name="msapplication-TileColor" content="#2e3f3a" />
          <meta name="msapplication-config" content="/browserconfig.xml" />

          {/* Preconnect to external domains for performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />


          {/* JSON-LD Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Restaurant",
                "name": "Teapresso 野萃",
                "alternateName": "Teapresso",
                "description": "Modern tea house serving handcrafted beverages, seasonal treats, and premium ingredients. Experience the art of freshly brewed tea and coffee.",
                "url": "https://dessert-web-pi.vercel.app",
                "logo": "https://dessert-web-pi.vercel.app/logo.png",
                "image": "https://dessert-web-pi.vercel.app/home.jpg",
                "priceRange": "££",
                "servesCuisine": ["Tea", "Coffee", "Beverages", "Light Snacks"],
                "acceptsReservations": false,
                "hasMenu": "https://www.teapresso.co.uk/s/order?location=11eff9bbb340e1a699353cecef6dbab4",
                "telephone": "+44 161 547 1023",
                "email": "info@tea-presso.com",
                "sameAs": [
                  "https://instagram.com/teapresso",
                  "https://tiktok.com/@teapresso"
                ],
                "address": [
                  {
                    "@type": "PostalAddress",
                    "streetAddress": "43 George St, Manchester",
                    "addressLocality": "Manchester",
                    "postalCode": "M1 4AB",
                    "addressCountry": "GB"
                  },
                  {
                    "@type": "PostalAddress",
                    "streetAddress": "61 The Headrow",
                    "addressLocality": "Leeds",
                    "postalCode": "LS1 6LR",
                    "addressCountry": "GB"
                  },
                  {
                    "@type": "PostalAddress",
                    "streetAddress": "100 Byres Rd",
                    "addressLocality": "Glasgow",
                    "postalCode": "G12 8TA",
                    "addressCountry": "GB"
                  }
                ],
                "openingHours": "Mo-Su 11:00-22:00",
                "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
                "currenciesAccepted": "GBP"
              })
            }}
          />
        </head>
        <body className={`${montserrat.className} bg-white min-h-screen flex flex-col`}>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <BackToTop />
          <Footer />
        </body>
      </html>
    </>
  );
}
