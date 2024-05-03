"use client";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import card2 from "../../public/card-2.webp";
import card4 from "../../public/card-4.webp";
import card5 from "../../public/card-5.webp";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 0,
    img: card2,
    title: "Alıcıda arabanız emin ellerde.",
    alt: "Tamir ve bakım yapılan arabalar.",
  },
  {
    id: 1,
    img: card4,
    title: "Kalite ve Güven",
    alt: "Arabanız emin ellerde.",
  },
  {
    id: 2,
    img: card5,
    title: "En sağlam tamir",
    alt: "Arabanıza bakın o da size baksın.",
  },
];

export default function CarouselCards() {
  const [curr, setCurr] = useState(0);
  const autoSlideInterval = 3000; // Otomatik kaydırma süresi (ms)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div className="flex transition-transform ease-out duration-500">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            style={{ display: index === curr ? "block" : "none" }}
          >
            <Image src={slide.img} alt={slide.alt} />
            <div>{slide.title}</div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <FaRegArrowAltCircleLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <FaRegArrowAltCircleRight size={40} />
        </button>
      </div>
    </div>
  );
}
