import React from "react";

export default function OurStoryPage() {
  return (
    <div className="w-full flex flex-col items-center bg-white py-12 md:py-20 px-4 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-8 md:mb-10 text-center uppercase tracking-tight">Our Story</h1>
      <div className="max-w-2xl text-center text-base md:text-xl text-neutral-700 leading-relaxed">
        Fuwa Fuwa, means “fluffy fluffy”, the UK's largest soufflé pancake & dessert cafe. From breakfast to dinner, and everything in between. We aim to deliver happiness, one pancake at a time.<br/><br/>
        Each pancake begins with egg whites whipped to soft peaks, essential to their finally airy quality, and is then cooked very slowly at low temperature. Tasting like a delicate balance between a soufflé and a traditional pancake, soufflé pancakes are soft, bouncy, and light.<br/><br/>
        <span className="block mt-8 text-xl md:text-2xl font-bold text-yellow-500">COME SEE WHAT ALL THE FLUFF IS ABOUT</span>
      </div>
    </div>
  );
} 