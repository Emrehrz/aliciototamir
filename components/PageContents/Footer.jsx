import { BsFillTelephoneFill } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

export default function Footer() {
  return (
    <footer className="mt-auto bg-green rounded-lg shadow ">
      <div className="w-full mx-auto max-w-screen-xl px-4 py-2 gap-2 md:gap-6 flex flex-col md:flex-row md:justify-around md:items-center ">
        <div className="flex items-center gap-2">
          <BsFillTelephoneFill />
          <a
            href="tel: 05414082016"
            className="hover:underline me-4 md:me-6 text-darkBlue font-semibold"
          >
            Uğur Usta: 0 541 408 20 16
          </a>
        </div>
        <div className="flex items-center gap-2">
          <GrInstagram />
          <a
            href="https://www.instagram.com/alici_ototamir27/"
            className="hover:underline me-4 md:me-6 text-darkBlue font-semibold bg-gradient-to-r from-orange-600 via-purple-500 to-pink-400 inline-block text-transparent bg-clip-text"
          >
            Bizi instagramda takip edin!
          </a>
        </div>
      </div>
    </footer>
  );
}
