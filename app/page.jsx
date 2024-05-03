import HeroSection from "../components/PageContents/HeroSection";
import LocationInfo from "../components/PageContents/LocationInfo";
import CTAbutton from "../components/PageContents/CTAbutton";
import Footer from "../components/PageContents/Footer";
import CarouselDeneme from "../components/PageContents/CarouselDeneme";
const slides = [
  {
    title: "Güvenilir Hizmet",
    description: "Bu birinci slayt",
    image: "/card-1.webp", // Yolu belirtin
  },
  {
    title: "Uygun Fiyat",
    description: "Bu ikinci slayt",
    image: "/card-2.webp", // Yolu belirtin
  },
  {
    title: "Eksiksiz Tamir ve Bakım",
    description: "Bu üçüncü slayt",
    image: "/card-3.webp", // Yolu belirtin
  },
];
export default function Page() {
  return (
    <div className="h-screen max-w-screen flex flex-col ">
      <HeroSection />

      <CarouselDeneme slides={slides} />

      <LocationInfo />
      <CTAbutton />
      <Footer />
    </div>
  );
}
