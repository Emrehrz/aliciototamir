import Image from 'next/image';
import { ShieldCheck, Wrench, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden py-32 pb-10 md:py-40 md:pb-20" id="hero">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/car-engine2.jpg"
          alt="Royal Motors Karanlık Garaj"
          fill
          priority
          className="object-cover object-center opacity-35 top-1/2"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative mt-[calc(0.5vh)] md:mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-xl">
            Güvenilir Oto Tamir, <br className="hidden sm:block" />
            <span className="text-red-600">Elektrik ve Klima</span> Servisi
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto">
            Gaziantep Şahinbey Mavikent Sanayi Sitesi'nde uzman kadromuz ve teknolojik
            ekipmanlarımızla aracınız için profesyonel çözümler sunuyoruz.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#iletisim"
              className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-lg shadow-red-900/30 transition-all focus:ring-4 focus:ring-red-500/50"
            >
              Hemen Randevu Al
            </a>
            <a
              href="#hizmetler"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-lg border border-zinc-700 transition-all"
            >
              Hizmetlerimizi İncele
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-zinc-300">
              <Clock className="h-6 w-6 text-red-500" />
              <span className="font-medium text-sm sm:text-base">Güvenilir İşçilik</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-zinc-300">
              <ShieldCheck className="h-6 w-6 text-red-500" />
              <span className="font-medium text-sm sm:text-base">Garantili Hizmet</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-zinc-300">
              <Wrench className="h-6 w-6 text-red-500" />
              <span className="font-medium text-sm sm:text-base">Uzman Kadro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
