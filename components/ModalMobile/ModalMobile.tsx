"use client";

import MobileMenu from "../Header/MobileMenu/MobileMenu";
import { useModalStore } from "@/lib/store/modalStore";
import { useWindowWidth } from "@/lib/hooks/useWindowWidth";

export default function ModalMobile() {
  const width = useWindowWidth();

  const { isOpen, setIsOpen } = useModalStore();

  if (isOpen && width >= 700) setIsOpen(false);

  return (
    isOpen && (
      <div>
        <MobileMenu />
      </div>
    )
  );
}
