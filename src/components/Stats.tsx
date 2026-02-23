export default function Stats() {
  const stats = [
    { value: '15+', label: 'Yıllık Tecrübe' },
    { value: '5k+', label: 'Mutlu Müşteri' },
    { value: '24 Ay', label: 'Hizmet Garantisi' },
    { value: '%100', label: 'Müşteri Memnuniyeti' },
  ];

  return (
    <section className="w-full bg-red-600 py-16 text-white border-y border-red-700">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-x-0 sm:divide-x divide-red-500/50">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center space-y-2"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight drop-shadow-md">
                {stat.value}
              </div>
              <div className="text-red-100 font-medium text-sm sm:text-base tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
