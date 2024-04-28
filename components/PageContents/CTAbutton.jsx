import { PiPhoneCallBold } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
export default function CTAbutton() {
  return (
    <div class="fixed bottom-0  right-0 flex flex-col w-auto gap-2 p-4">
      <p className="font-semibold text-sm bg-lightBlue/60 text-white rounded-md px-2 ">
        Hemen bize ulaşın!
      </p>
      <a
        class="ml-auto inline-flex flex-row "
        target="_blank"
        href="https://wa.me/905414082016?text=Merhaba,%20kolay%20gelsin."
      >
        <BsWhatsapp className="ml-auto h-12 w-12 bg-white text-[#25D366] rounded-md p-2" />
      </a>
      <a class="ml-auto inline-flex flex-row  " href="tel: 05414082016">
        <PiPhoneCallBold className="ml-auto h-12 w-12 bg-white  text-darkBlue rounded-md p-2" />
      </a>
    </div>
  );
}
