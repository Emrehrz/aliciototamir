import Image from "next/image";
import HeroBg from "../../public/heroBg.webp";
import card2 from "../../public/card-2.webp";
import { motion } from "framer-motion";

export default function InfoCard() {
  return (
    <div className="w-full  p-4 bg-green rounded-b-lg shadow ">
      <Image
        src={card2}
        width={300}
        height={300}
        className="mx-auto rounded-md"
        alt="oto tamir ve bakim servisi"
      />

      <div className="p-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <div className="text-slate-900">Sorunsuz tamir</div>
        </h5>
        <p className="mb-3 bg-lightBlue/20 py-2 px-3 text-center leading-relaxed font-semibold rounded-md text-darkBlue ">
          Arıza ve sorun çıkaran araçlarınız için emin elden gelen çözümler.
        </p>
      </div>
    </div>
  );
}
