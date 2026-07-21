import { Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="w-full bg-red-600 py-20 relative overflow-hidden z-10">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none mix-blend-overlay" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6 drop-shadow-lg">
          Aracınızı Tamir Ettirmeye Hazır Mısınız?
        </h2>
        <p className="text-red-100 text-lg sm:text-xl font-medium mb-10 max-w-2xl mx-auto drop-shadow-md">
          Usta ellerde güvenli sürüş için hemen bizi arayın veya randevunuzu alın. Royal Motors olarak daima yanınızdayız.
        </p>

        {/* Telefon Kartları Konteyneri */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          {/* Enver Usta */}
          <a
            href="tel:+905345681485"
            className="group flex w-full sm:w-1/2 items-center justify-start sm:justify-center gap-4 rounded-2xl bg-black/25 hover:bg-black/40 border border-white/10 p-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl backdrop-blur-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/20 text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
              <Phone className="h-5 w-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-red-200 group-hover:text-white transition-colors">
                Enver Usta
              </span>
              <span className="text-base sm:text-lg font-bold text-white tracking-wide">
                +90 534 568 14 85
              </span>
            </div>
          </a>

          {/* Uğur Usta */}
          <a
            href="tel:+905414082078"
            className="group flex w-full sm:w-1/2 items-center justify-start sm:justify-center gap-4 rounded-2xl bg-black/25 hover:bg-black/40 border border-white/10 p-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl backdrop-blur-md"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/20 text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
              <Phone className="h-5 w-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-red-200 group-hover:text-white transition-colors">
                Uğur Usta
              </span>
              <span className="text-base sm:text-lg font-bold text-white tracking-wide">
                +90 541 408 20 78
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}