"use client"
import React from "react";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 md:py-24 bg-white px-4">
        <h1 className="text-4xl md:text-7xl font-extrabold text-yellow-500 tracking-tight mb-4 text-center uppercase leading-tight">Fluffy Fluffy</h1>
        <h2 className="text-xl md:text-3xl font-semibold text-neutral-800 mb-6 text-center leading-snug">Japanese Pancakes Handcrafted Masterpiece</h2>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-4 w-full md:w-auto justify-center items-center">
          <a href="/menu" className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-8 rounded-full shadow transition text-lg text-center">Our Menu</a>
        </div>
      </section>
      {/* Our Story Section */}
      <section id="our-story" className="w-full bg-yellow-50 py-12 md:py-20 flex flex-col items-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-6 text-center">Our Story</h2>
        <div className="max-w-2xl text-center text-base md:text-lg text-neutral-700 leading-relaxed">
          Fuwa Fuwa, means “fluffy fluffy”, the UK's largest soufflé pancake & dessert cafe. From breakfast to dinner, and everything in between. We aim to deliver happiness, one pancake at a time.<br/><br/>
          Each pancake begins with egg whites whipped to soft peaks, essential to their finally airy quality, and is then cooked very slowly at low temperature. Tasting like a delicate balance between a soufflé and a traditional pancake, soufflé pancakes are soft, bouncy, and light.
        </div>
      </section>
    </div>
  );
}
