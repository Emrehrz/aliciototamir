import { PhoneCall } from 'lucide-react';

export default function CTA() {
  return (
    <section className="w-full bg-red-600 py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6 drop-shadow-lg">
          Aracınızı Tamir Ettirmeye Hazır Mısınız?
        </h2>
        <p className="text-red-100 text-lg sm:text-xl font-medium mb-10 max-w-2xl mx-auto drop-shadow-md">
          Usta ellerde güvenli sürüş için hemen randevunuzu alın formumuzu doldurun ya da bizi arayın. Royal Motors olarak daima yanınızdayız.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+905555555555"
            className="flex items-center gap-2 px-8 py-4 bg-zinc-950 hover:bg-zinc-900 text-white font-bold text-lg rounded-xl shadow-2xl transition-all hover:-translate-y-1 focus:ring-4 focus:ring-zinc-800"
          >
            <PhoneCall className="h-5 w-5 text-red-500" />
            Hemen Ara
          </a>
          <a
            href="#iletisim"
            className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-red-600 text-white font-bold text-lg rounded-xl shadow-lg transition-all hover:-translate-y-1"
          >
            Randevu Al
          </a>
        </div>
      </div>
    </section>
  );
}
