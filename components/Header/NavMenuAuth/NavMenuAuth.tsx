"use client";

import LinkAnim from "@/components/parts/LinkAnim/LinkAnim";
import ButtonText from "@/components/parts/ButtonText/ButtonText";
import { normalizeEmail } from "@/lib/utils/strings";

export default function NavMenuAuth() {
  const testEmails = {
    short: "user@mail.com",
    long: "myVeryLongEmail123456789@mail.com",
  };

  const normalizedEmail = normalizeEmail(testEmails.long, 16);

  return (
    <>
      <li>
        <LinkAnim
          href="/profile"
          text="Profile"
          prefetch={false}
          colorHover="var(--color-yellow-500)"
          twStyles="py-3 block tablet:inline"
        />
      </li>
      <li>
        <p className="font-light mobile:text-s28 tablet:text-s18 py-3 tablet:py-0">
          {normalizedEmail}
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
