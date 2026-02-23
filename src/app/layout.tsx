import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Royal Motors | Gaziantep Şahinbey Oto Elektrik ve Klima Servisi',
  description:
    'Mavikent Sanayi Sitesi Oto Elektrik ve Klima Servisi - Royal Motors. Gaziantep Şahinbey araç tamir, bakım, klima gazı ve oto elektrik çözümlerinde güvenilir adresiniz.',
  keywords: [
    'Gaziantep Şahinbey Oto Tamir',
    'Mavikent Sanayi Sitesi Oto Elektrik',
    'Klima Servisi',
    'Royal Motors',
    'Gaziantep Araç Tamir',
  ],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://royalmotorsgaziantep.com',
    title: 'Royal Motors | Gaziantep Şahinbey Oto Elektrik ve Klima Servisi',
    description:
      'Mavikent Sanayi Sitesi Oto Elektrik ve Klima Servisi - Royal Motors. Gaziantep Şahinbey bölgesinde uzman hizmet.',
    siteName: 'Royal Motors',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'Royal Motors',
    image: 'https://royalmotorsgaziantep.com/garage-bg.jpg',
    '@id': '',
    url: 'https://royalmotorsgaziantep.com',
    telephone: '+905555555555',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mavikent Sanayi Sitesi',
      addressLocality: 'Şahinbey',
      addressRegion: 'Gaziantep',
      postalCode: '27000',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.0662,
      longitude: 37.3833,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
    sameAs: [],
  };

  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-950 text-zinc-50 antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        {children}
      </body>
    </html>
  );
}
