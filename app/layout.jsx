import { inter } from "./ui/fonts";
import Navbar from "../components/Navbar/Navbar";
import ContactBanner from "../components/ContactBanner/ContactBanner";
import "../app/ui/global.css";
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
