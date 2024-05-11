import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import logo from "../../public/logo.webp";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className=" flex gap-2 text-2xl font-bold justify-center items-center bg-lightBlue text-white">
      <Image
        src={logo}
        className="mx-auto"
        width={100}
        height={100}
        alt="Alıcı Oto Tamir ve Bakım Servisi logo"
      />
    </nav>
  );
}
