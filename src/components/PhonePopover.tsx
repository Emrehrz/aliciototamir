'use client';

import React, { useState, useRef, useEffect } from "react";
import { Phone } from "lucide-react";

export default function PhonePopover() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // HTMLDivElement tipini useRef'e tanımladık
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Event parametresine MouseEvent tipini tanımladık
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={popoverRef}>
      {/* Tetikleyici Buton */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center gap-2 rounded-lg bg-zinc-800 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 focus:outline-none whitespace-nowrap"
      >
        <Phone className="h-4 w-4" />
        <span>Telefonla Ara</span>
      </button>

      {/* Popover Kutusu */}
      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 flex min-w-[260px] flex-col gap-1 rounded-xl border border-zinc-700/60 bg-zinc-800/95 p-2 shadow-xl backdrop-blur-md transition-all">
          <a
            href="tel:+905345681485"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:bg-zinc-700/70 hover:text-white whitespace-nowrap"
          >
            <Phone className="h-4 w-4 shrink-0 text-green-400" />
            <div className="flex flex-col text-left">
              <span className="text-[11px] text-zinc-400 leading-none mb-1">ENVER USTA</span>
              <span className="font-semibold text-white tracking-wide">+90 534 568 14 85</span>
            </div>
          </a>

          <a
            href="tel:+905414082078"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:bg-zinc-700/70 hover:text-white whitespace-nowrap"
          >
            <Phone className="h-4 w-4 shrink-0 text-green-400" />
            <div className="flex flex-col text-left">
              <span className="text-[11px] text-zinc-400 leading-none mb-1">UĞUR USTA</span>
              <span className="font-semibold text-white tracking-wide">+90 541 408 20 78</span>
            </div>
          </a>
        </div>
      )}
    </div>
  );
}