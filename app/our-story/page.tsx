import React from "react";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col items-center bg-white py-12 md:py-20 px-4 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-8 md:mb-10 text-center uppercase tracking-tight">About Us</h1>
      <div className="max-w-2xl text-center text-lg md:text-xl text-blue-900 leading-relaxed mb-6">
        Welcome to Paris Baguette, your destination for exquisite French pastries and signature whole cakes. Indulge in our artisanal treats crafted with passion and precision, promising a taste of Parisian elegance with every bite.<br/><br/>
        Open seven days a week, offering the perfect blend of a classic bakery, boulangerie and patisserie. Join us to enjoy freshly baked baguettes, lovely lunch options and cakes that genuinely wouldn’t look out of place hanging in the Louvre.
      </div>
      <div className="max-w-2xl text-center text-base md:text-lg text-blue-800 leading-relaxed">
        Whatever your dietary requirements, we believe that life’s little pleasures should be for everybody. From vegan delights to allergy-friendly options, we take pride in catering to both your cravings and dietary needs!
      </div>
    </div>
  );
} 