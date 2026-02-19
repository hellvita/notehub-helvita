"use client";

import { useReducer, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/lib/store/authStore";
import {
  getMe,
  updateMe,
  updateAvatar,
  UpdateRequest,
  deleteMe,
} from "@/lib/api/clientApi";
import { User } from "@/types/user";
import Loader from "@/components/Loader/Loader";
import UserAvatar from "@/components/parts/UserAvatar/UserAvatar";
import EditAvatar from "@/components/User/Profile/EditAvatar";
import ButtonText from "@/components/parts/ButtonText/ButtonText";
import { FaArrowLeftLong as IconBack } from "react-icons/fa6";
import UserInfo from "@/components/parts/UserInfo/UserInfo";
import FormInput from "@/components/parts/FormInput/FormInput";
import toast from "react-hot-toast";
import { normalizeEmail } from "@/lib/utils/strings";
import { DEFAULT_AVATAR } from "@/types/user";

interface ProfileState {
  userData: User | null;
  userName: string;
  userPassword: string;
  avatarUrl: string;
  avatarFile: File | undefined;
  advancedIsOpen: boolean;
}

type ProfileAction =
  | {
      type: "INITIAL_LOAD";
      payload: { data: User; username: string; avatar: string };
    }
  | { type: "SET_AVATAR_URL"; payload: string }
  | { type: "SET_AVATAR_FILE"; payload: File }
  | { type: "SET_USER_NAME"; payload: string }
  | { type: "SET_USER_PASSWORD"; payload: string }
  | { type: "TOGGLE_ADVANCED" };

const profileReducer = (
  state: ProfileState,
  action: ProfileAction,
): ProfileState => {
  switch (action.type) {
    case "INITIAL_LOAD": {
      return {
        ...state,
        userData: action.payload.data,
        userName: action.payload.username,
        avatarUrl: action.payload.avatar,
      };
    }
    case "SET_AVATAR_URL": {
      return { ...state, avatarUrl: action.payload };
    }
    case "SET_AVATAR_FILE": {
      return { ...state, avatarFile: action.payload };
    }
    case "SET_USER_NAME": {
      return { ...state, userName: action.payload };
    }
    case "SET_USER_PASSWORD": {
      return { ...state, userPassword: action.payload };
    }
    case "TOGGLE_ADVANCED": {
      return { ...state, advancedIsOpen: !state.advancedIsOpen };
    }
    default: {
      return state;
    }
  }
};

export default function EditProfilePage() {
  const router = useRouter();

  const setUser = useAuthStore((state) => state.setUser);
  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated,
  );

  const [state, dispatch] = useReducer(profileReducer, {
    userData: null,
    userName: "",
    userPassword: "",
    avatarUrl: "",
    avatarFile: undefined,
    advancedIsOpen: false,
  });
  const {
    avatarUrl,
    avatarFile,
    userData,
    userName,
    userPassword,
    advancedIsOpen,
  } = state;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getMe();

        dispatch({
          type: "INITIAL_LOAD",
          payload: { data, username: data.username, avatar: data.avatar },
        });
      } catch {
        toast("Could not load profile, please try again...");
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (avatarFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        dispatch({ type: "SET_AVATAR_URL", payload: reader.result as string });
      };

      reader.readAsDataURL(avatarFile);
    }
  }, [avatarFile]);

  const resetAvatar = () => {
    dispatch({ type: "SET_AVATAR_URL", payload: DEFAULT_AVATAR });
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_USER_NAME", payload: event.target.value });
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_USER_PASSWORD", payload: event.target.value });
  };

  const { mutate, isPending } = useMutation({
    mutationFn: updateMe,
    onSuccess: async (res) => {
      setUser(res);

      if (avatarFile) {
        const formData = new FormData();
        formData.append("avatar", avatarFile);

        const newAvatar = await updateAvatar(formData);

        res.avatar = newAvatar;
        setUser(res);
      }

      toast("Your profile was successfully updated!");

      if (userPassword !== "") {
        dispatch({ type: "SET_USER_PASSWORD", payload: "" });
      }
    },
    onError: (error) => {
      toast(
        (error as Error).message
          ? (error as Error).message
          : "Could not update profile, please try again...",
      );
    },
  });

  const handleSave = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newData: UpdateRequest = {
      email: userData?.email ? userData.email : "",
      username: userName,
    };

    if (avatarUrl !== "") {
      newData.avatar = avatarUrl;
    }
    if (userPassword !== "") {
      newData.password = userPassword;
    }

    mutate(newData);
  };

  const handleCancel = () => router.push("/profile");

  const handleDeleteUser = async () => {
    const isConfirmed = confirm(
      "Are you sure you want to delete your account?",
    );

    if (isConfirmed) {
      try {
        const data = await deleteMe();

        toast(data.message);

        clearIsAuthenticated();

        router.push("/sign-in");
      } catch (error) {
        toast(
          (error as Error).message
            ? (error as Error).message
            : "Could not delete account, please try again...",
        );
      }
    }
  };

  if (!userData) return <Loader />;

  const normalizedEmail = normalizeEmail(userData.email);

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
          text={isPending ? "Saving..." : "Save"}
          handler={() => {}}
          isLoading={isPending}
          twStyles="py-2 px-3  max-h-11.5 text-pink-400 text-s28 font-medium border max-tablet:hidden"
          bgColorHover="var(--color-pink-400)"
          borderColorHover="var(--color-pink-400)"
        />
      </div>

      <div className="flex flex-col gap-10 items-center tablet:flex-row tablet:items-start">
        <div className="flex flex-col max-tablet:items-center  gap-2">
          <UserAvatar imageUrl={avatarUrl} />
          <EditAvatar
            setAvatar={(file) =>
              dispatch({ type: "SET_AVATAR_FILE", payload: file })
            }
            resetAvatar={resetAvatar}
          />
        </div>

        <div className="w-full flex flex-col gap-y-5 tablet:max-tablet:flex-row tablet:max-tablet-big:justify-between mb-13 tablet:mb-0">
          <FormInput
            label="Username"
            id="username"
            type="text"
            name="username"
            defaultValue={userData.username}
            onChange={handleUsernameChange}
            hint="Enter username"
            twStylesLabel="text-pink-400 mobile:text-s24"
            twStylesInput="py-2 px-4 outline-0 mobile:text-s28 placeholder:font-light placeholder:text-white-400/50"
          />

          <UserInfo
            label="Email"
            value={normalizedEmail}
            twStylesLabel="text-pink-400 mobile:text-s24"
          />

          <p
            className="group/advanced mobile:text-s20 hover:text-pink-400 transition-color duration-200 mt-5"
            onClick={() => dispatch({ type: "TOGGLE_ADVANCED" })}
          >
            {advancedIsOpen ? <span>{"v "}</span> : <span>{"> "}</span>}
            <span className="border-b transition-all duration-300 group-hover/advanced:border-transparent">
              Advanced settings
            </span>
          </p>
          {advancedIsOpen && (
            <>
              <FormInput
                label="Change password"
                id="password"
                type="password"
                name="password"
                minLength={6}
                required={false}
                value={userPassword}
                onChange={handlePasswordChange}
                hint="Enter new password"
                twStylesLabel="text-pink-400 mobile:text-s24"
                twStylesInput="py-2 px-4 outline-0 mobile:text-s28 placeholder:font-light placeholder:text-white-400/50"
              />

              <button
                type="button"
                className="text-white-950/50 hover:text-pink-400 text-left mobile:text-s18"
                onClick={handleDeleteUser}
              >
                Delete account
              </button>
            </>
          )}
        </div>
      </div>

      <ButtonText
        type="submit"
        text={isPending ? "Saving..." : "Save"}
        handler={() => {}}
        isLoading={isPending}
        twStyles="p-3.5 min-w-0 my-0 mx-auto block w-full text-pink-400 mobile:text-s20 font-medium border  tablet:hidden"
        bgColorHover="var(--color-pink-400)"
        borderColorHover="var(--color-pink-400)"
      />
    </form>
  );
}
