import { oswald } from "../../app/ui/fonts";
export default function HeroSection() {
  const writerArr = ["GÜVENİLİR", "HIZLI", "UYGUN"];
  const theText = "";
  function typeWriter() {
    for (let i = 0; i < writerArr.length; i++) {
      console.log(writerArr[i]);
    }
  }
  typeWriter();
  return (
    <div className="max-w-screen h-3/6 flex bg-[url('/heroBg.webp')] bg-blend-overlay bg-cover  bg-no-repeat bg-center  bg-slate-700 bg-opacity-90 py-2 ">
      <div className=" flex flex-col gap-20 h-full w-auto my-auto  justify-center p-2">
        <h1
          className={`${oswald.className} px-2 py-4 rounded-md w-10/12 mx-auto text-4xl md:text-6xl lg:text-8xl font-bold text-white text-start leading-normal tracking-wider animate-slidein`}
        >
          UZMAN ÇÖZÜMLER KALİTELİ ve HIZLI HİZMET
        </h1>
        <p className="w-fit mx-auto px-2 rounded-md  bg-white/80 text-darkBlue font-bold  text-lg md:text-xl lg:text-2xl text-center ">
          <span className="uppercase"> GÜVENİLİR </span> Tamir ve Bakım
          servisiniz.
        </p>
      </div>
    </div>
  );
}
