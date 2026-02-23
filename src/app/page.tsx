import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center w-full relative">
        <Hero />
        <Marquee />
        <Services />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
