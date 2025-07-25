"use client"
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center bg-white">
      {/* Hero Banner */}
      <section className="w-full px-0 md:px-12 lg:px-32">
        <div className="lg:max-w-6xl mx-auto">
          <Image
            src="/hero-banner.jpeg"
            alt="Paris Baguette Hero Banner"
            width={1920}
            height={600}
            className="w-full h-auto lg:h-[400px] lg:object-cover"
            priority
          />
        </div>
      </section>


      {/* Afternoon Tea & Click & Collect */}
      <section className="w-full flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center py-12 md:py-20 px-4 lg:px-20 bg-white border-b border-blue-100">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-500 mb-2" id="afternoon-tea">Afternoon Tea & Prosecco</h3>
          <p className="text-base md:text-lg text-neutral-700 mb-4 max-w-md">Enjoy a Sparkling Afternoon Tea Experience for just £26 per guest. Savour a selection of fresh baguettes, indulgent cakes, your choice of hot drink, and a small bottle of Prosecco – the perfect way to unwind.</p>
          <a href="#contact" className="inline-block bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-full shadow transition text-base">Book now!</a>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-500 mb-2" id="click-collect">Click & Collect</h3>
          <p className="text-base md:text-lg text-neutral-700 mb-4 max-w-md">Craving the perfect cake? Our freshly baked, handcrafted cakes are made with love in-store, just for you! Whether it’s a special occasion or a sweet treat, we’ve got the ideal cake waiting. Order now and indulge in a slice of perfection.</p>
          <a href="#contact" className="inline-block bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold py-2 px-6 rounded-full shadow transition text-base border border-blue-300">Order cake!</a>
        </div>
      </section>
      {/* Featured Products */}
      <section className="w-full py-12 md:py-20 bg-blue-50 px-4 border-b border-blue-100">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-8 text-center">Featured Treats</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* 示例产品卡片，可根据实际产品替换 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-blue-100">
            <div className="w-32 h-32 mb-4 relative">
              <Image src="/cake1.jpg" alt="Peach & Earl Grey Cake" fill className="object-cover rounded-xl" />
            </div>
            <div className="font-bold text-lg text-neutral-900 mb-1">Peach & Earl Grey Cake</div>
            <div className="text-neutral-600 text-base mb-1">Coming 15th July!</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-blue-100">
            <div className="w-32 h-32 mb-4 relative">
              <Image src="/tart.jpg" alt="Pear & Chocolate Tart" fill className="object-cover rounded-xl" />
            </div>
            <div className="font-bold text-lg text-neutral-900 mb-1">Pear & Chocolate Tart</div>
            <div className="text-neutral-600 text-base mb-1">Savour the sweet symphony.</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-blue-100">
            <div className="w-32 h-32 mb-4 relative">
              <Image src="/mochi.jpg" alt="Mochi doughnut" fill className="object-cover rounded-xl" />
            </div>
            <div className="font-bold text-lg text-neutral-900 mb-1">Mochi doughnut</div>
            <div className="text-neutral-600 text-base mb-1">Sweet and delicious.</div>
          </div>
        </div>
      </section>
      {/* The Art of Baking & Food For Thought */}
      <section className="w-full py-12 md:py-20 bg-white px-4 border-b border-blue-100 flex flex-col md:flex-row gap-12 md:gap-24 justify-center items-center">
        <div className="flex-1 max-w-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-500 mb-2">The Art of Baking</h3>
          <p className="text-base md:text-lg text-neutral-700 mb-4">Open seven days a week, offering the perfect blend of a classic bakery, boulangerie and patisserie. Join us to enjoy freshly baked baguettes, lovely lunch options and cakes that genuinely wouldn’t look out of place hanging in the Louvre.</p>
        </div>
        <div className="flex-1 max-w-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-500 mb-2">Food For Thought</h3>
          <p className="text-base md:text-lg text-neutral-700 mb-4">Whatever your dietary requirements, we believe that life’s little pleasures should be for everybody. From vegan delights to allergy-friendly options, we take pride in catering to both your cravings and dietary needs!</p>
        </div>
      </section>
      {/* Locations */}
      <section className="w-full py-12 md:py-20 bg-blue-50 px-4 flex flex-col items-center border-b border-blue-100">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-6 text-center">Our Locations</h2>
        <div className="max-w-2xl text-center text-base md:text-lg text-neutral-700 leading-relaxed mb-4">No matter if you’re a local or just passing through, whether you call London home or you’re here to explore, a warm welcome and great food await you at any of our fantastic Paris Baguette locations.</div>
        <a href="/locations" className="inline-block bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-8 rounded-full shadow transition text-base">View Locations</a>
      </section>
    </div>
  );
}
