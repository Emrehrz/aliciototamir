"use client";
import { PiPhoneCallBold } from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";
export default function CTAbutton() {
  const text = "Framer ";
  return (
    <div className="fixed bottom-0 right-0 flex flex-col w-auto gap-2 p-4">
      <motion.div
        initial={{ opacity: 0.4 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
      >
        <p className="font-semibold  bg-lightBlue/70 text-white rounded-md px-2 ">
          Hemen bize ulaşın!
        </p>
      </motion.div>
      <motion.div
        className="w-fit h-fit ml-auto "
        animate={{ rotate: 360 }}
        transition={{ type: "spring", duration: 5, bounce: 0.6 }}
      >
        <a
          className=" inline-flex flex-row "
          target="_blank"
          href="https://wa.me/905414082016?text=Merhaba,%20kolay%20gelsin."
        >
          <BsWhatsapp className="ml-auto h-12 w-12 bg-white text-[#25D366] rounded-md p-2" />
        </a>
      </motion.div>
      <motion.div
        className="w-fit h-fit ml-auto "
        animate={{ rotate: -360 }}
        transition={{ type: "spring", duration: 5, bounce: 0.6 }}
      >
        <a className="ml-auto inline-flex flex-row  " href="tel: 05414082016">
          <PiPhoneCallBold className="ml-auto h-12 w-12 bg-white  text-darkBlue rounded-md p-2" />
        </a>
      </motion.div>
    </div>
  );
}
