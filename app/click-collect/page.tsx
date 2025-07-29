import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import ImageCarousel from "../_components/ImageCarousel";
import VideoPlayer from "../_components/VideoPlayer";

export const metadata: Metadata = {
  title: "Click & Collect - Order Online & Pick Up",
  description: "Experience the convenience of Click & Collect at Teapresso. Order your favorite tea and coffee drinks online and collect them at your convenience.",
  keywords: ["click and collect", "online ordering", "pickup", "tea delivery", "coffee ordering", "Teapresso"],
  openGraph: {
    title: "Click & Collect - Order Online & Pick Up",
    description: "Order your favorite Teapresso drinks online and collect them at your convenience.",
    images: ["/click_1.jpg"],
  },
};

export default function ClickCollectPage() {
  return (
    <div className="min-h-screen bg-[#FAF8ED]">
      {/* Hero Section */}
      <div className="bg-[#2e3f3a] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Click & Collect
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Order your favorite drinks and treats online, then collect them at your convenience.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-24">
        {/* Image Sections */}
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <Image
              src="/click_1.jpg"
              alt="Teapresso Click & Collect Experience"
              width={1920}
              height={600}
              className="w-full h-auto"
              priority
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#2e3f3a] mb-4">
                Freshly Crafted for You
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Every order is prepared fresh to order, ensuring you get the perfect taste and quality every time.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <Image
              src="/click_2.jpg"
              alt="Teapresso Menu Selection"
              width={1920}
              height={600}
              className="w-full h-auto"
              priority
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#2e3f3a] mb-4">
                Extensive Menu
              </h3>
              <p className="text-gray-700 leading-relaxed">
                From classic milk teas to specialty coffees, explore our full menu of premium beverages and treats.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <Image
              src="/click_3.jpg"
              alt="Teapresso Collection Point"
              width={1920}
              height={600}
              className="w-full h-auto"
              priority
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#2e3f3a] mb-4">
                Convenient Collection
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Skip the queue and collect your order at your convenience. Perfect for busy schedules.
              </p>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="my-16">
          <div className="text-center mb-8">
            {/* <h2 className="text-2xl md:text-3xl font-bold text-[#2e3f3a] mb-4">
              Experience Click & Collect
            </h2> */}
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Let's take a look at the process of making a cup of tea
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50">
            <div className="relative aspect-[9/16] md:aspect-video max-w-4xl mx-auto">
              <VideoPlayer
                src="https://customer-ugajlzvkncemhxjh.cloudflarestream.com/a18bf24112a34a56ad61a7e71f2de7fb/manifest/video.m3u8"
                poster="/click_1.jpg"
                // title="Click & Collect"
                className="w-full h-full"
              />
            </div>

            {/* Video Description */}
            <div className="p-6 md:p-8 bg-gradient-to-b from-gray-50 to-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  {/* <h3 className="text-xl font-bold text-[#2e3f3a] mb-2">
                    See How It Works
                  </h3> */}
                  <p className="text-gray-600">
                    From ordering to collection, discover the seamless Teapresso experience
                  </p>
                </div>
                <a
                  href="https://www.teapresso.co.uk/s/order?location=11eff9bbb340e1a699353cecef6dbab4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#2e3f3a] hover:bg-[#2e3f3a]/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span>Order Now</span>
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          {/* Image Carousel */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2e3f3a] mb-4">
              Our Featured Menu
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our handcrafted beverages available for Click & Collect
            </p>
          </div>
          <ImageCarousel />
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2e3f3a] mb-4">
            Ready to Order?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Experience the convenience of Click & Collect and enjoy your favorite Teapresso drinks without the wait.
          </p>
          <a
            target="_blank"
            href="https://www.teapresso.co.uk/s/order?location=11eff9bbb340e1a699353cecef6dbab4"
            className="inline-block bg-[#2e3f3a] hover:bg-[#2e3f3a]/90 text-white font-semibold mb-12 py-4 px-8 rounded-lg transition-colors duration-200 transform hover:scale-105"
          >
            Start Ordering
          </a>
        </div>
      </div>
    </div>
  );
} 