export default function Marquee() {
  const brands = [
    'VOLKSWAGEN',
    'AUDI',
    'MERCEDES',
    'FORD',
    'RENAULT',
    'CITROËN',
    'PEUGEOT',
    'FIAT',
    'OPEL',
    'TOYOTA'
  ];

  return (
    <section className="w-full bg-zinc-950 py-8 border-y border-zinc-900 overflow-hidden relative flex items-center">
      {/* Fade edges */}
      <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

      {/* Marquee container */}
      <div className="flex w-max animate-marquee space-x-12 sm:space-x-24 hover:pause">
        {/* Double the list for seamless infinite scroll */}
        {[...brands, ...brands, ...brands].map((brand, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center min-w-max"
          >
            <span className="text-xl sm:text-2xl font-black tracking-widest text-zinc-800 uppercase flex items-center gap-12 sm:gap-24">
              {brand}
              {/* Separator dot */}
              <span className="text-zinc-900 mx-6 sm:mx-12">•</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
