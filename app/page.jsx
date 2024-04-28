import HeroSection from "../components/PageContents/HeroSection";
import LocationInfo from "../components/PageContents/LocationInfo";
import InfoCard from "../components/PageContents/InfoCard";
import CTAbutton from "../components/PageContents/CTAbutton";
import Footer from "../components/PageContents/Footer";

export default function Page() {
  return (
    <div className="h-screen max-w-screen flex flex-col ">
      <HeroSection />
      <InfoCard />
      <LocationInfo />
      <CTAbutton />
      <Footer />
    </div>
  );
}
