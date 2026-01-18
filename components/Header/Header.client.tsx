"use client";

import { useModalStore } from "@/lib/store/modalStore";
import NavMobile from "./NavMobile/NavMobile";

export default function HeaderClient() {
  const { isOpen, setIsOpen } = useModalStore();

  return <NavMobile isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />;
}
