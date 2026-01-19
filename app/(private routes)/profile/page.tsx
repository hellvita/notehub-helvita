import { getProfilePicture } from "@/lib/utils/strings";
import Image from "next/image";
import ButtonLink from "@/components/parts/ButtonLink/ButtonLink";
import UserInfo from "@/components/parts/UserInfo/UserInfo";

export default function ProfilePage() {
  return (
    <div className="py-12 px-5 tablet-big:px-10 bg-black-800">
      <div className="mb-10">
        <h1 className="mobile:text-s32 tablet:text-s40 desktop:text-s56 font-medium">
          Profile Page
        </h1>
      </div>

      <Image
        src={getProfilePicture()}
        alt="default profile picture"
        width={140}
        height={140}
        className="mb-10 mx-auto tablet-big:mx-0 tablet-big:mb-0 tablet-big:mr-10 max-w-35 aspect-square"
      />

      <div className="flex flex-col gap-5 mb-13 tablet:mb-0">
        <UserInfo label="Username" value="my-user-name" />
        <UserInfo label="Email" value="my@mail.com" />
      </div>

      <ButtonLink
        text="Edit"
        href="/profile/edit"
        twStyles="p-3.5 min-w-0 my-0 mb-10 mx-auto block w-full tablet:max-w-22 text-yellow-500 text-center mobile:text-s20 tablet-big:text-s24 font-medium border cursor-pointer tablet:hidden"
        bgColorHover="var(--color-yellow-500)"
        borderColorHover="var(--color-yellow-500)"
      />
    </div>
  );
}
