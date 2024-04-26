import HeroSection from "../components/PageContents/HeroSection";
import LocationInfo from "../components/PageContents/LocationInfo";
import InfoCard from "../components/PageContents/InfoCard";

export default function Page() {
  return (
    <div className="h-screen max-w-screen flex flex-col ">
      <HeroSection />
      <InfoCard />
      <LocationInfo />
    </div>
  );
}
