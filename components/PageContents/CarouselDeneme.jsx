"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
export default function CarouselDeneme({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Her 5 saniyede bir slaydı değiştir
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative ">
      <div className="h-[400px] w-[300px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transform transition-opacity duration-300 ease-in-out ${
              index === currentSlide
                ? "animate-fade-left animate-duration-300 animate-delay-200 animate-ease-in-out"
                : "opacity-0"
            }`}
          >
            <Image
              className="mx-auto w-full h-full md:w-[400px] md:h-[400px] "
              src={slide.image}
              alt={slide.title}
              width={400}
              height={400}
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
              <h2 className="text-lg font-bold">{slide.title}</h2>
              {/* <p className="text-sm">{slide.description}</p> */}
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
}
