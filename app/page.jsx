import HeroSection from "../components/PageContents/HeroSection";
import LocationInfo from "../components/PageContents/LocationInfo";
import CTAbutton from "../components/PageContents/CTAbutton";
import Footer from "../components/PageContents/Footer";
import CarouselSlider from "../components/PageContents/CarouselSlider";

const slides = [
  {
    title: "Motor Tamir",
    description:
      "Güvenilir, eksiksiz ve hızlı hizmet anlayışımızla hem her marka ve model aracınızı hem de sizin memnuniyetinizi önemsiyoruz.",
    image: "/card-1.webp",
    alt: "Alman araba tamir ve bakım.",
  },
  {
    title: "Periyodik Bakım",
    description:
      "Aracınızın uzun ömürlü olması ve ideal sürüş için gerekli bakımları itina ile yapmaktayız.",
    image: "/card-2.webp",
    alt: "Alıcı Oto Tamir ve Bakım Servisinden bir kare.",
  },
  {
    title: "Arıza Tespit ve Onarım",
    description:
      "Çeşitli nedenlerle arıza veren arabanız için mümkün olan en uygun onarım işlemi gerçekleştiriyoruz.",
    image: "/card-3.webp",
    alt: "Amerikan arabalarına işlem uygulamaktayız.",
  },
];
export default function Page() {
  return (
    <div className="h-screen max-w-screen flex flex-col ">
      <HeroSection />
      <CarouselSlider slides={slides} />
      <LocationInfo />
      <CTAbutton />
      <Footer />
    </div>
  );
}
