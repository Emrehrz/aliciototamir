import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
export default function Navbar() {
  return (
    <nav className=" flex gap-2 text-2xl font-bold justify-center items-center bg-lightBlue p-4 text-white">
      <HiOutlineWrenchScrewdriver />
      <p>Alıcı Ototamir</p>
    </nav>
  );
}
