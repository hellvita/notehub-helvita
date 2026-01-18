"use client";

import LinkAnim from "@/components/parts/LinkAnim/LinkAnim";
import ButtonText from "@/components/parts/ButtonText/ButtonText";

export default function NavMenuAuth() {
  return (
    <>
      <li>
        <LinkAnim
          href="/"
          text="Profile"
          prefetch={false}
          colorHover="var(--color-yellow-500)"
          twStyles="py-3"
        />
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
