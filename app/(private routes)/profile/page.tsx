import { getProfilePicture } from "@/lib/utils/strings";
import Image from "next/image";
import ButtonLink from "@/components/parts/ButtonLink/ButtonLink";
import UserInfo from "@/components/parts/UserInfo/UserInfo";
import { normalizeEmail } from "@/lib/utils/strings";

export default function ProfilePage() {
  const testEmails = {
    short: "user@mail.com",
    long: "myVeryLongEmail123456789@mail.com",
  };

  const normalizedEmail = normalizeEmail(testEmails.long, 16);

  return (
    <div className="py-12 px-5 tablet:px-10 bg-black-800">
      <div className="mb-10 flex justify-between">
        <h1 className="mobile:text-s32 tablet:text-s40 desktop:text-s56 font-medium">
          Profile Page
        </h1>
        <ButtonLink
          text="Edit"
          href="/profile/edit"
          twStyles="py-2 px-3 block max-w-22 text-yellow-500 text-center text-s28 font-medium border cursor-pointer max-tablet:hidden"
          bgColorHover="var(--color-yellow-500)"
          borderColorHover="var(--color-yellow-500)"
        />
      </div>

      <div className="flex flex-col gap-10 items-center tablet-big:flex-row">
        <Image
          src={getProfilePicture()}
          alt="default profile picture"
          width={140}
          height={140}
          className="max-w-35 aspect-square"
        />

        <div className="w-full flex flex-col gap-y-5 tablet:max-tablet-big:flex-row tablet:max-tablet-big:justify-between mb-13 tablet:mb-0">
          <UserInfo label="Username" value="my-user-name" />
          <UserInfo
            label="Email"
            value={normalizedEmail}
            twStylesLabel="text-yellow-500 mobile:text-s24 tablet:max-tablet-big:text-right"
            twStylesValue="mobile:text-s28 tablet:max-tablet-big:text-right"
          />
        </div>
      </div>

      <ButtonLink
        text="Edit"
        href="/profile/edit"
        twStyles="p-3.5 min-w-0 my-0 mx-auto block w-full text-yellow-500 text-center mobile:text-s20 font-medium border cursor-pointer tablet:hidden"
        bgColorHover="var(--color-yellow-500)"
        borderColorHover="var(--color-yellow-500)"
      />
    </div>
  );
}
