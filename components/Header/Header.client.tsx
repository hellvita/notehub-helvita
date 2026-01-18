"use client";

import { useState } from "react";
import NavMobile from "./NavMobile/NavMobile";

export default function HeaderClient() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <NavMobile isOpen={isOpen} onToggle={() => setIsOpen((prev) => !prev)} />
  );
}
