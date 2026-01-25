"use client";

import MobileMenu from "../Header/MobileMenu/MobileMenu";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useModalStore } from "@/lib/store/modalStore";
import { useWindowWidth } from "@/lib/hooks/useWindowWidth";

export default function ModalMobile() {
  const width = useWindowWidth();
  const pathname = usePathname();

  const { isOpen, setIsOpen } = useModalStore();

  if (isOpen && width && width >= 700) setIsOpen(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="overflow-hidden z-30">
          <MobileMenu />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
