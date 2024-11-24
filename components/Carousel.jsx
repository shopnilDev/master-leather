"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const walletImages = [
    "/images/black.webp",
    "/images/chocolate.webp",
    "/images/black-2.webp",
    "/images/chocolate-2.webp",
  ];

  const totalSlides = walletImages.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const getVisibleSlides = () => {
    const visibleSlides = [];
    for (let i = -1; i <= totalSlides; i++) {
      const slideIndex = (i + totalSlides) % totalSlides;
      visibleSlides.push(walletImages[slideIndex]);
    }
    return visibleSlides;
  };

  return (
    <div
      className="relative w-full mx-auto bg-[#D5E4E8] border border-black rounded-2xl p-4"
      style={{ boxShadow: "0px 0px 6px 2px rgba(0, 0, 0, 0.5)" }}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(calc(-${(currentIndex + 1) * 100}% / 3))`,
            width: `calc(${(totalSlides + 2) * 100}% / 3)`,
          }}
        >
          {getVisibleSlides().map((img, index) => (
            <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-2">
              <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]">
                <Image
                  src={img}
                  alt={`Wallet ${index}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white border-2 rounded-full p-2"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white border-2 rounded-full p-2"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div className="flex justify-center mt-4 space-x-2">
        {walletImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-black w-4" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
