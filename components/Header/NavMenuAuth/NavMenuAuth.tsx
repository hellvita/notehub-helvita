"use client";

import Link from "next/link";
import ButtonText from "@/components/parts/ButtonText/ButtonText";

export default function NavMenuAuth() {
  return (
    <>
      <li>
        <Link
          href="/"
          prefetch={false}
          className="py-3 hover:text-yellow-500 focus:text-yellow-500 transition-colors duration-300"
        >
          Profile
        </Link>
      </li>
      <li>
        <p className="font-light">user@mail.com</p>
      </li>
      <li>
        <ButtonText text="Logout" handler={() => {}} />
      </li>
    </>
  );
}
