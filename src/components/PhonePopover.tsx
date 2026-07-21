'use client'; // Next.js Client Component direktifi

import React, { useState, useRef, useEffect } from "react";
import { Phone } from "lucide-react";

export default function PhonePopover() {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);

  // Dışarıya tıklandığında popover'ı kapatan logic
  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block w-full" ref={popoverRef}>
      {/* Tetikleyici Buton */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-800 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 focus:outline-none"
      >
        <Phone className="h-4 w-4" />
        <span>Bizi Arayın</span>
      </button>

      {/* Popover İçeriği */}
      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 flex min-w-[260px] flex-col gap-1 rounded-xl border border-zinc-700/60 bg-zinc-800/95 p-2 shadow-xl backdrop-blur-md transition-all">
          <a
            href="tel:+905345681485" // 2. Numarayı buraya ekleyebilirsiniz
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:bg-zinc-700/70 hover:text-white"
          >
            {/* <Phone className="h-2 w-2 text-green-400" /> */}
            <Phone className="h-4 w-4 text-green-400" />

            <div className="flex flex-col text-left">
              <span className="text-xs text-zinc-400">Enver USTA</span>
              <span>+90 534 568 14 85</span>
            </div>
          </a>
          <a
            href="tel:+905414082078"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:bg-zinc-700/70 hover:text-white"
          >
            <Phone className="h-4 w-4 text-green-400" />
            <div className="flex flex-col text-left">
              <span className="text-xs text-zinc-400">UĞUR USTA</span>
              <span>+90 541 408 20 78</span>
            </div>
          </a>
        </div>
      )}
    </div>
  );
}