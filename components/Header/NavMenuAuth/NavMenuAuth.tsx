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
          twStyles="py-3 block tablet:inline"
        />
      </li>
      <li>
        <p className="font-light mobile:text-s28 tablet:text-s18 py-3 tablet:py-0">
          user@mail.com
        </p>
      </li>
      <li>
        <ButtonText
          text="Logout"
          handler={() => {}}
          twStylesAdditional="max-tablet:py-2 mobile:max-tablet:text-s32"
        />
      </li>
    </>
  );
}
