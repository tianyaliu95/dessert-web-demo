import React from "react";
import Image from "next/image";
import ImageCarousel from "../_components/ImageCarousel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Our Story & Philosophy",
  description: "Founded in 2024, Teapresso 野萃 is a modern tea & coffee house redefining how the world enjoys tea and coffee. Learn about our journey, philosophy, and commitment to quality.",
  keywords: ["about Teapresso", "tea house story", "modern tea house philosophy", "handcrafted beverages", "tea ritual", "coffee house history"],
  openGraph: {
    title: "About Teapresso 野萃 - Our Story & Philosophy",
    description: "Founded in 2024, Teapresso is a modern tea & coffee house bringing the art of freshly brewed tea and coffee to life.",
    images: ["/home_2.png"],
  },
};

// Menu images data
const menuImages = [
  {
    src: "/menu/m1.jpeg",
    alt: "Green Tea Chappucino",
    title: "Green Tea Chappucino",
    description: "观自在［铁观音］"
  },
  {
    src: "/menu/m2.jpeg",
    alt: "Peach Tea Chappuccino",
    title: "Peach Tea Chappuccino",
    description: "桃花仙［白桃乌龙］"
  },
  {
    src: "/menu/m3.jpeg",
    alt: "Osmanthus Tea Chappuccino",
    title: "Osmanthus Tea Chappuccino",
    description: "不待月［桂花乌龙］"
  },
  {
    src: "/menu/m4.jpeg",
    alt: "Oolong Tea Chappuccino",
    title: "Oolong Tea Chappuccino",
    description: "冬令时［大红袍］"
  },
  {
    src: "/menu/m5.jpeg",
    alt: "Rose and Lychee Tea Frappe",
    title: "Rose and Lychee Tea Frappe",
    description: "瑰姿艳荔 [玫瑰普洱荔枝]"
  },
  {
    src: "/menu/m6.jpeg",
    alt: "Golden Black Tea Frappe",
    title: "Golden Black Tea Frappe",
    description: "落日熔金"
  },
  {
    src: "/menu/m7.jpeg",
    alt: "Roasted Brown Sugar Milk Bubble",
    title: "Roasted Brown Sugar Milk Bubble",
    description: "烤黑糖珍珠牛乳"
  },
  {
    src: "/menu/m8.jpeg",
    alt: "Original Avocado Yogurt Smoothie",
    title: "Original Avocado Yogurt Smoothie",
    description: "经典牛油果酸奶奶昔"
  },
  {
    src: "/menu/m9.jpeg",
    alt: "Iced Oolong Lemon Tea",
    title: "Iced Oolong Lemon Tea",
    description: "心静自然凉"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-[#2e3f3a] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Redefining how the world enjoys tea and coffee, one freshly extracted cup at a time.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Who We Are Section */}
        <div className="mb-20">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2e3f3a] mb-6">
              Who We Are
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                Founded in 2024, Teapresso is a modern tea & coffee house redefining how the world enjoys tea and coffee, one freshly extracted cup at a time.
              </p>
              <p className="text-lg leading-relaxed">
                From vibrant global cities like Manchester, Toronto, and Glasgow to intimate neighbourhood corners, Teapresso brings the art of freshly brewed tea and coffee to life. No matter how far we grow, we remain that "hidden gem" — a cosy, stylish spot where quality and ritual meet, and every cup tells a story.
              </p>
            </div>
          </div>

        </div>

        {/* What We Do Section with Carousel */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2e3f3a] mb-6">
              What We Do
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover our passion for crafting exceptional beverages and creating memorable experiences through our carefully curated menu and warm hospitality.
            </p>
          </div>

          {/* Image Carousel */}
          <ImageCarousel images={menuImages} />
        </div>

        <div className="text-center mb-10">
          <a
            href="https://www.teapresso.co.uk/s/order?location=11eff9bbb340e1a699353cecef6dbab4"
            target="_blank"
            className="inline-block text-zinc-100 bg-[#2e3f3a] font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            Order Now
          </a>
        </div>

        {/* Your Everyday Section */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2e3f3a] mb-6">
                Your Everyday
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Though our signature freshly brewed milk teas are at the heart of what we do, Teapresso finds the perfect balance between a modern tea house and a neighbourhood café.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#2e3f3a]/5 to-[#2e3f3a]/10">
                <div className="w-16 h-16 bg-[#2e3f3a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 6h10l-1 14a2 2 0 01-2 2H10a2 2 0 01-2-2L7 6z" />
                  </svg>

                </div>
                <h3 className="text-xl font-bold text-[#2e3f3a] mb-3">
                  Handcrafted Beverages
                </h3>
                <p className="text-gray-700">
                  Serving handcrafted beverages alongside seasonal treats made with care, creativity, and only the finest ingredients.
                </p>
              </div>

              {/* Service Card 2 */}
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#2e3f3a]/5 to-[#2e3f3a]/10">
                <div className="w-16 h-16 bg-[#2e3f3a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2e3f3a] mb-3">
                  Perfect Balance
                </h3>
                <p className="text-gray-700">
                  Whether it's a bold matcha, a floral oolong, or a smooth espresso, every drink is designed to complement your day.
                </p>
              </div>

              {/* Service Card 3 */}
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#2e3f3a]/5 to-[#2e3f3a]/10">
                <div className="w-16 h-16 bg-[#2e3f3a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2e3f3a] mb-3">
                  Daily Ritual
                </h3>
                <p className="text-gray-700">
                  From morning pick-me-ups to slow afternoon moments, we're here to make every moment special.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#2e3f3a] to-[#2e3f3a]/90 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Experience Teapresso Today
            </h3>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Visit one of our locations and discover why we're becoming the favorite spot for tea and coffee lovers everywhere.
            </p>
            <a
              href="/locations"
              className="inline-block bg-white text-[#2e3f3a] hover:bg-gray-100 font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              View Our Locations
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 