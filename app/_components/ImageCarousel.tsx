"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
    title: string;
    description: string;
  }[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Ensure we're on the client side before starting auto-play
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Auto-play functionality - only run on client side
  useEffect(() => {
    if (!isClient) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isClient]);

  // Show loading state until client-side hydration is complete
  if (!isClient) {
    return (
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <div className="absolute inset-0">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {images[0].title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-200">
                    {images[0].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === currentIndex}
              />
              {/* Overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {image.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-200">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#2e3f3a]/80 hover:bg-[#2e3f3a] text-white p-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl z-10"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#2e3f3a]/80 hover:bg-[#2e3f3a] text-white p-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl z-10"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? "bg-[#2e3f3a] scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail Navigation */}
      <div className="hidden md:flex justify-center mt-8 space-x-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-200 ${
              index === currentIndex
                ? "ring-2 ring-[#2e3f3a] scale-105"
                : "hover:scale-105"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
} 