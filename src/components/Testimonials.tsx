import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Ahmet Yılmaz',
      role: 'Volkswagen Passat Sahibi',
      content: 'Aracımın klima arızası için pek çok yere gittim ama sorunu sadece Royal Motors çözebildi. Uğur Usta ve ekibi gerçekten işinin ehli. Güler yüzlü ve dürüst hizmet.',
    },
    {
      name: 'Mehmet Kaplan',
      role: 'Mercedes C200 Sahibi',
      content: 'Akü değişimi ve periyodik bakım için tercih ettim. Hem fiyatları çok makul hem de işlerini titizlikle yapıyorlar. Herkese tavsiye ederim.',
    },
    {
      name: 'Elif Demir',
      role: 'Renault Clio Sahibi',
      content: 'Bilgisayarlı arıza tespiti ile nokta atışı sorunu buldular. Gereksiz hiçbir parça değiştirmeden en ekonomik şekilde aracımı onardılar. Çok teşekkürler.',
    },
  ];

  return (
    <section id="yorumlar" className="w-full bg-zinc-950 py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <span className="text-red-600 font-bold tracking-wider text-sm mb-3 uppercase">Müşteri Yorumları</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-2xl mb-4">
            UĞUR USTA VE EKİBİNE <span className="text-red-600">TEŞEKKÜRLER</span>
          </h2>
          <p className="text-zinc-400 max-w-xl text-lg">
            Gaziantep Şahinbey'de bizi tercih eden ve memnuniyetini paylaşan yüzlerce müşterimizden birkaçı.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl flex flex-col justify-between shadow-xl relative"
            >
              {/* Quote Mark Decoration */}
              <div className="absolute top-6 right-6 text-6xl text-zinc-800 font-serif leading-none opacity-50">"</div>

              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-zinc-300 italic mb-8 relative z-10 text-lg leading-relaxed">
                  "{review.content}"
                </p>
              </div>

              <div className="border-t border-zinc-800 pt-4 mt-auto">
                <p className="text-white font-bold">{review.name}</p>
                <p className="text-zinc-500 text-sm">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute -left-40 top-40 w-80 h-80 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-40 bottom-40 w-80 h-80 bg-red-900/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
