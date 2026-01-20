"use client";

import { useRouter } from "next/navigation";
import DefaultAvatar from "@/components/parts/DefaultAvatar/DefaultAvatar";
import ButtonText from "@/components/parts/ButtonText/ButtonText";
import { FaArrowLeftLong as IconBack } from "react-icons/fa6";
import UserInfo from "@/components/parts/UserInfo/UserInfo";
import FormInput from "@/components/parts/FormInput/FormInput";
import { normalizeEmail } from "@/lib/utils/strings";

export default function EditProfilePage() {
  const router = useRouter();

  const handleCancel = () => router.push("/profile");

  const testEmails = {
    short: "user@mail.com",
    long: "myVeryLongEmail123456789@mail.com",
  };

  const normalizedEmail = normalizeEmail(testEmails.long, 16);

  return (
    <form className="py-12 px-5 tablet:px-10 bg-black-800 border-t-pink-400 border-t-3">
      <div className="mb-10 flex gap-10 items-center">
        <button
          onClick={handleCancel}
          className="group tablet:hidden ps-3 py-3 cursor-pointer"
        >
          <IconBack className="group-hover:fill-pink-400/88 transition-colors duration-300 mobile:text-s20" />
        </button>
        <h1 className="mobile:text-s32 tablet:text-s40 desktop:text-s56 font-medium">
          Edit Page
        </h1>
      </div>

      <div className="flex flex-col gap-10 items-center tablet-big:flex-row">
        <DefaultAvatar />

        <div className="w-full flex flex-col gap-y-5 tablet:max-tablet-big:flex-row tablet:max-tablet-big:justify-between mb-13 tablet:mb-0">
          <FormInput
            label="Username"
            id="username"
            type="text"
            name="username"
            defaultValue="my-user-name"
            hint="Username"
            twStylesLabel="text-yellow-500 mobile:text-s24"
            twStylesInput="py-2 px-4 outline-0 mobile:text-s28 placeholder:font-light placeholder:text-white-400/50"
          />
          <UserInfo label="Email" value={normalizedEmail} />
        </div>
      </div>

      <ButtonText
        type="submit"
        text="Save"
        handler={() => {}}
        twStyles="p-3.5 min-w-0 my-0 mx-auto block w-full tablet:max-w-58 text-pink-400 mobile:text-s20 tablet-big:text-s24 font-medium border cursor-pointer"
        bgColorHover="var(--color-pink-400)"
        borderColorHover="var(--color-pink-400)"
      />
    </form>
  );
}
