"use client";

import { GiHamburgerMenu as IconMenu } from "react-icons/gi";
import { FaArrowLeftLong as IconBack } from "react-icons/fa6";

interface NavMobileProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function NavMobile({ isOpen, onToggle }: NavMobileProps) {
  return (
    <button
      onClick={onToggle}
      className="group tablet:hidden ps-3 py-3 cursor-pointer"
    >
      {isOpen ? (
        <IconBack className="group-hover:fill-blue-400/88 transition-colors duration-300 mobile:text-s20" />
      ) : (
        <IconMenu className="group-hover:fill-blue-400/88 transition-colors duration-300 mobile:text-s20" />
      )}
    </button>
  );
}
