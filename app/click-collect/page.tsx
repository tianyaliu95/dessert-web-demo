import React from "react";

export default function ClickCollectPage() {
  return (
    <div className="w-full flex flex-col items-center bg-white py-12 md:py-20 px-4 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#2e3f3a] mb-8 md:mb-10 text-center uppercase tracking-tight">Click & Collect</h1>
      <div className="max-w-2xl text-center text-lg md:text-xl text-[#2e3f3a] leading-relaxed mb-6">
        Craving the perfect cake? Our freshly baked, handcrafted cakes are made with love in-store, just for you! Whether it’s a special occasion or a sweet treat, we’ve got the ideal cake waiting. Order now through Click & Collect and indulge in a slice of perfection.
      </div>
      <a href="/contact" className="inline-block bg-[#2e3f3a] hover:bg-[#2e3f3a]/80 text-white font-bold py-3 px-8 rounded-full shadow transition text-lg mt-6">Order cake!</a>
    </div>
  );
} 