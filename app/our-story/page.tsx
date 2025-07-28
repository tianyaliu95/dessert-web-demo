import React from "react";

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
            Discover the story behind Teapresso and our mission to revolutionize the tea experience.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="prose prose-lg mx-auto text-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2e3f3a] mb-6">
              Our Story
            </h2>
            
            <p className="text-lg leading-relaxed mb-6">
              Welcome to Teapresso, your destination for exquisite French pastries and signature whole cakes. Indulge in our artisanal treats crafted with passion and precision, promising a taste of Parisian elegance with every bite.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Open seven days a week, offering the perfect blend of a classic bakery, boulangerie and patisserie. Join us to enjoy freshly baked baguettes, lovely lunch options and cakes that genuinely wouldn't look out of place hanging in the Louvre.
            </p>
            
            <h3 className="text-xl md:text-2xl font-bold text-[#2e3f3a] mb-4 mt-8">
              Our Philosophy
            </h3>
            
            <p className="text-lg leading-relaxed">
              Whatever your dietary requirements, we believe that life's little pleasures should be for everybody. From vegan delights to allergy-friendly options, we take pride in catering to both your cravings and dietary needs!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 