import React from "react";

export default function OffersPage() {
  return (
    <div className="w-full flex flex-col items-center bg-white py-12 md:py-20 px-4 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#2e3f3a] mb-8 md:mb-10 text-center uppercase tracking-tight">Offers & Promotions</h1>
      <div className="max-w-2xl text-center text-lg md:text-xl text-[#2e3f3a] leading-relaxed mb-6">
        Discover our latest offers and promotions! Whether you’re celebrating a special occasion or just want to treat yourself, Paris Baguette has something for everyone. Check back often for new deals and seasonal specials.
      </div>
      <div className="max-w-2xl text-center text-base md:text-lg text-[#2e3f3a]/80 leading-relaxed">
        Everyone needs cake on their birthday! Sign up for our loyalty program and enjoy exclusive rewards.
      </div>
    </div>
  );
} 