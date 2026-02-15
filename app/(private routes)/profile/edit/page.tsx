"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/store/authStore";
import { getMe, updateMe } from "@/lib/api/clientApi";
import { User } from "@/types/user";
import Loader from "@/components/Loader/Loader";
import UserAvatar from "@/components/parts/UserAvatar/UserAvatar";
import IcButtonEditImg from "@/components/parts/IcButtonEditImg/IcButtonEditImg";
import ButtonText from "@/components/parts/ButtonText/ButtonText";
import { FaArrowLeftLong as IconBack } from "react-icons/fa6";
import UserInfo from "@/components/parts/UserInfo/UserInfo";
import FormInput from "@/components/parts/FormInput/FormInput";
import toast from "react-hot-toast";
import { normalizeEmail } from "@/lib/utils/strings";

export default function EditProfilePage() {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);
  const [newUserData, setNewUserData] = useState<User | null>(null);
  const [userName, setUserName] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getMe();

        setNewUserData(data);
        setUserName(data.username);
        setAvatar(data.avatar);
      } catch {
        toast("Could not load profile, please try again...");
      }
    };

    fetchUser();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await updateMe({
      email: newUserData?.email ? newUserData.email : "",
      username: userName,
    });

    if (res) {
      setUser(res);
      router.push("/profile");
    } else {
      toast("Could not update profile, please try again...");
    }
  };

  const handleCancel = () => router.push("/profile");

  if (!newUserData) return <Loader />;

  const normalizedEmail = normalizeEmail(newUserData.email);

  return (
    <form
      className="py-12 px-5 tablet:px-10 bg-black-800 border-t-pink-400 border-t-3"
      onSubmit={handleSave}
    >
      <div className="mb-10 flex items-center tablet:justify-between">
        <div className="flex gap-10 items-center ">
          <button
            onClick={handleCancel}
            type="button"
            className="group p-3 cursor-pointer"
          >
            <IconBack
              className="group-hover:fill-pink-400/88 transition-colors duration-300 text-s20 tablet:text-s28"
              aria-label="go back"
            />
          </button>
          <h1 className="mobile:text-s32 tablet:text-s40 desktop:text-s56 font-medium">
            Edit Page
          </h1>
        </div>

        <ButtonText
          type="submit"
          text="Save"
          handler={() => {}}
          twStyles="py-2 px-3 max-w-22 max-h-11.5 text-pink-400 text-s28 font-medium border cursor-pointer max-tablet:hidden"
          bgColorHover="var(--color-pink-400)"
          borderColorHover="var(--color-pink-400)"
        />
      </div>

      <div className="flex flex-col gap-10 items-center tablet:flex-row">
        <div className="flex max-tablet:flex-col max-tablet:items-center tablet:items-baseline gap-2">
          <UserAvatar imageUrl={avatar} />
          <IcButtonEditImg />
        </div>

        <div className="w-full flex flex-col gap-y-5 tablet:max-tablet:flex-row tablet:max-tablet-big:justify-between mb-13 tablet:mb-0">
          <FormInput
            label="Username"
            id="username"
            type="text"
            name="username"
            defaultValue={newUserData.username}
            onChange={handleChange}
            hint="Username"
            twStylesLabel="text-pink-400 mobile:text-s24"
            twStylesInput="py-2 px-4 outline-0 mobile:text-s28 placeholder:font-light placeholder:text-white-400/50"
          />
          <UserInfo
            label="Email"
            value={normalizedEmail}
            twStylesLabel="text-pink-400 mobile:text-s24"
          />
        </div>
      </div>

      <ButtonText
        type="submit"
        text="Save"
        handler={() => {}}
        twStyles="p-3.5 min-w-0 my-0 mx-auto block w-full text-pink-400 mobile:text-s20 font-medium border cursor-pointer tablet:hidden"
        bgColorHover="var(--color-pink-400)"
        borderColorHover="var(--color-pink-400)"
      />
    </form>
  );
}
