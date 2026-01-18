"use client";

import { motion } from "motion/react";
import DefaultNavigation from "../DefaultNavigation/DefaultNavigation";
import AuthNavigation from "../AuthNavigation/AuthNavigation";

export default function MobileMenu() {
  //-top-[100%] -right-[50%]

  return (
    <motion.div
      className="absolute w-full h-full bg-black-900 selection:text-purple-800 selection:bg-pink-400 top-12 right-0 z-30"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 0.7 } }}
      transition={{ duration: 0.5 }}
    >
      <div className="py-7 flex flex-col gap-3 text-center mobile:text-s32">
        <DefaultNavigation />
        <AuthNavigation />
      </div>
    </motion.div>
  );
}
