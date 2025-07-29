import React from "react";
import Image from "next/image";
import ImageCarousel from "../_components/ImageCarousel";

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

        <div className="my-8">
          {/* Image Carousel */}
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