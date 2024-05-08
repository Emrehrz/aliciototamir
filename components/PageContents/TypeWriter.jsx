"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import CursorBlinker from "./CursorBlinker";

export default function TypeWriter() {
  const baseText = "GÜVENİLİR Tamir ve Bakım servisiniz. ";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 1,
      ease: "easeOut",
    });
    return controls.stop;
  }, []);

  return (
    <h2 className="w-fit mx-auto">
      <motion.span className=" p-2 rounded-md bg-white/80 text-darkBlue font-bold  text-lg md:text-xl lg:text-2xl text-center ">
        {displayText}
      </motion.span>
      <CursorBlinker />
    </h2>
  );
}
