import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="iletisim" className="w-full bg-zinc-950 pt-20 pb-8 border-t border-zinc-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand & Setup */}
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center group">
              <div className="relative h-12 w-56 sm:h-16 sm:w-64 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Royal Motors Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 224px, 256px"
                />
              </div>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Mavikent Sanayi Sitesi'nde yılların getirdiği tecrübe ile aracınızın tüm mekanik ve elektrik sistemlerini uzmanlıkla onarıyoruz. Profesyonel ve güvenilir hizmetin adresi.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
                <span className="text-zinc-300 text-sm leading-relaxed">
                  Mavikent Sanayi Sitesi, Şahinbey / Gaziantep
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-red-600 shrink-0" />
                <a href="tel:+905555555555" className="text-zinc-300 text-sm hover:text-white transition-colors">
                  +90 555 555 55 55
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-red-600 shrink-0" />
                <a href="mailto:info@royalmotorsgaziantep.com" className="text-zinc-300 text-sm hover:text-white transition-colors">
                  info@royalmotors.com
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">Çalışma Saatleri</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 border-b border-zinc-800 pb-2">
                <Clock className="h-5 w-5 text-zinc-500 shrink-0" />
                <div className="flex flex-col w-full">
                  <div className="flex justify-between w-full">
                    <span className="text-zinc-300 text-sm">Hafta İçi:</span>
                    <span className="text-zinc-100 text-sm font-medium">08:00 - 18:00</span>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-4 border-b border-zinc-800 pb-2">
                <Clock className="h-5 w-5 text-zinc-500 shrink-0" />
                <div className="flex justify-between w-full">
                  <span className="text-zinc-300 text-sm">Cumartesi:</span>
                  <span className="text-zinc-100 text-sm font-medium">08:00 - 15:00</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Clock className="h-5 w-5 text-zinc-700 shrink-0" />
                <div className="flex justify-between w-full">
                  <span className="text-zinc-500 text-sm">Pazar:</span>
                  <span className="text-red-500 text-sm font-bold uppercase tracking-wider">Kapalı</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Google Maps Map Iframe */}
          <div className="space-y-6 h-full min-h-[200px] flex flex-col">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">Haritada Biz</h3>
            <div className="w-full grow bg-zinc-800 rounded-xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500 min-h-[200px]">
              <iframe
                title="Şahinbey Mavikent Sanayi Haritası"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101254.51268955217!2d37.3809627!3d37.0658421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e50523f2b4c1%3A0x8e8eb4efc42c7aa!2sGaziantep%2C%20%C5%9Eahinbey%2FGaziantep!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-900 text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Royal Motors Gaziantep. Tüm Hakları Saklıdır.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</Link>
            <Link href="#" className="hover:text-white transition-colors">Çerez Politikası</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
