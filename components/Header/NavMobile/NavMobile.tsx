"use client";

import { useState } from "react";
import { GiHamburgerMenu as IconMenu } from "react-icons/gi";
import { FaArrowLeftLong as IconBack } from "react-icons/fa6";

export default function NavMobile() {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setMenuIsOpen((currentValue) => !currentValue);

  return (
    <button
      onClick={toggleMenu}
      className="group tablet:hidden py-3 cursor-pointer"
    >
      {menuIsOpen ? (
        <IconBack
          size={20}
          className="group-hover:fill-blue-400/88 transition-colors duration-300"
        />
      ) : (
        <IconMenu
          size={20}
          className="group-hover:fill-blue-400/88 transition-colors duration-300"
        />
      )}
    </button>
  );
}
