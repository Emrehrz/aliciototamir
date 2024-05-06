import { oswald } from "../../app/ui/fonts";
import TypeWriter from "./TypeWriter";
export default function HeroSection() {
  return (
    <div className="max-w-screen h-3/6 p-2 flex bg-[url('/heroBg.webp')] bg-blend-overlay bg-cover  bg-no-repeat bg-center  bg-slate-700 bg-opacity-75 ">
      <div className=" flex flex-col gap-20 h-full w-auto my-auto justify-center py-2">
        <h1
          className={`${oswald.className} px-2 py-4 rounded-md w-10/12 mx-auto text-4xl md:text-6xl lg:text-8xl font-bold text-white text-start leading-normal tracking-wider animate-slidein duration-200 delay-100`}
        >
          UZMAN ÇÖZÜMLER KALİTELİ ve HIZLI HİZMET
        </h1>
        <TypeWriter />
      </div>
    </div>
  );
}
