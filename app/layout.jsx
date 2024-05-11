import { inter } from "./ui/fonts";
import Navbar from "../components/Navbar/Navbar";
import "../app/ui/global.css";

export const metadata = {
  title: "Alıcı Oto - Gaziantep Oto Tamir ve Bakım Hizmetleri",
  description:
    "Gaziantep oto tamir ve bakim servisi. Uygun ve pratik işçilik, ustasından güvence. ",
  generator: "Next.js",
  keywords: ["Oto", "Araba", "Tamir", "Bakım", "Gaziantep"],
  // authors: [{ name: "Emre" }, { name: "Emre", url: "https://nextjs.org" }],
  creator: "Emre HORUZ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-lightGreen`}>
        {/* <ContactBanner /> */}
        <Navbar />
        <div className="container mx-auto h-full">{children}</div>
      </body>
    </html>
  );
}
