"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { delay, motion, useTime, useTransform } from "framer-motion";
export default function CarouselSlider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Her 3 saniyede bir slaydı değiştir
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
    <div className="relative block md:hidden ">
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
              className="mx-auto w-full h-full md:w-[600px] md:h-[600px] "
              src={slide.image}
              alt={slide.alt}
              width={400}
              height={400}
            />
            <div className="absolute flex flex-col gap-2 bottom-0 left-0 w-full bg-green bg-opacity-70 text-slate-900 p-2 md:text-center">
              <h3 className="text-xl font-bold">{slide.title}</h3>
              <p className="mx-auto text-base bg-white opacity-50 w-fit p-1 px-2 rounded-md">
                {slide.description}
              </p>
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
