import { Wrench, Zap, Wind, MonitorSmartphone, BatteryCharging, ThermometerSun } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      title: 'Oto Tamir & Mekanik',
      description: 'Motor bakımı, yürüyen aksam onarımı, fren sistemleri ve genel mekanik sorunlara kesin ve garantili çözümler üretiyoruz.',
      icon: <Wrench className="h-8 w-8 text-red-600" />
    },
    {
      title: 'Oto Elektrik Sistemleri',
      description: 'Marş dinamosu, şarj dinamosu, far aydınlatma sistemleri ve tesisat arızalarında uzman teknisyenlerle servis sağlıyoruz.',
      icon: <Zap className="h-8 w-8 text-red-600" />
    },
    {
      title: 'Klima Bakım & Gaz Dolumu',
      description: 'Klima kompresör tamiri, kaçak tespiti, klima radyatörü değişimi ve tam otomatik cihazlarla kusursuz gaz dolum işlemleri.',
      icon: <Wind className="h-8 w-8 text-red-600" />
    },
    {
      title: 'Bilgisayarlı Arıza Tespiti',
      description: 'Son teknoloji diagnostik OBD cihazlarımız ile aracınızdaki tüm elektronik arızaları noktasal olarak tespit edip siliyoruz.',
      icon: <MonitorSmartphone className="h-8 w-8 text-red-600" />
    },
    {
      title: 'Akü Değişimi',
      description: 'Mutlu, İnci ve Varta marka kaliteli akü çeşitlerimizle yerinde akü ölçümü ve profesyonel akü değişim hizmeti.',
      icon: <BatteryCharging className="h-8 w-8 text-red-600" />
    },
    {
      title: 'Kalorifer Petek Temizleme',
      description: 'Özel solüsyonlu makinelerle tıkalı kalorifer peteklerini sökmeden temizliyor, aracınızın ısıtma performansını artırıyoruz.',
      icon: <ThermometerSun className="h-8 w-8 text-red-600" />
    }
  ];

  return (
    <section id="hizmetler" className="w-full bg-zinc-950 py-24 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 flex flex-col items-center justify-center text-center">
          <span className="text-red-600 font-bold uppercase tracking-wider text-sm mb-3">Çözüm Odaklı Servis</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-2xl">
            Profesyonel Bakım ve <span className="text-red-600">Onarım Hizmetleri</span>
          </h2>
          <div className="w-24 h-1.5 bg-red-600 mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 transition-all hover:-translate-y-2 hover:border-zinc-700 hover:shadow-2xl hover:shadow-red-900/10 group group-hover:bg-zinc-800/80"
            >
              <div className="bg-zinc-950 w-16 h-16 rounded-xl flex items-center justify-center mb-2 shadow-inner border border-zinc-800 group-hover:border-red-600/30 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide">{service.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Visual background noise/gradient element */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
