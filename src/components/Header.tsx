'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', href: '#' },
    { name: 'Hakkımızda', href: '#hakkimizda' },
    { name: 'Hizmetlerimiz', href: '#hizmetler' },
    { name: 'Yorumlar', href: '#yorumlar' },
    { name: 'İletişim', href: '#iletisim' },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 py-0 shadow-lg'
          : 'bg-transparent border-transparent py-2'
        }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-10 w-44 sm:h-12 sm:w-56 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Royal Motors Logo"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 640px) 176px, 224px"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-300 transition-all hover:text-white relative group py-2"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+905555555555"
            className="flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 focus:ring-2 focus:ring-zinc-500 focus:outline-none"
          >
            <Phone className="h-4 w-4" />
            <span>Telefonla Ara</span>
          </a>
          <a
            href="#iletisim"
            className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-green-700 shadow-lg shadow-green-900/20 focus:ring-2 focus:ring-green-500 focus:outline-none"
          >
            <Calendar className="h-4 w-4" />
            <span>Randevu Al</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-zinc-300 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menüyü aç/kapat"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-zinc-800 bg-zinc-900 px-4 py-6 shadow-2xl">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-zinc-300 hover:text-red-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:+905555555555"
                className="flex items-center justify-center gap-2 rounded-lg bg-zinc-800 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
              >
                <Phone className="h-4 w-4" />
                <span>Telefonla Ara</span>
              </a>
              <a
                href="#iletisim"
                className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-green-700"
              >
                <Calendar className="h-4 w-4" />
                <span>Randevu Al</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
