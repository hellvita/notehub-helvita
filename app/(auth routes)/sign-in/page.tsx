"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login, LoginRequest } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import toast from "react-hot-toast";
import AuthForm from "@/components/Auth/AuthForm";
import FormInput from "@/components/parts/FormInput/FormInput";
import ButtonText from "@/components/parts/ButtonText/ButtonText";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const setUser = useAuthStore((state) => state.setUser);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (formData: FormData) => {
    try {
      setError("");

      const formValues = Object.fromEntries(
        formData,
      ) as unknown as LoginRequest;

      const res = await login(formValues);

      if (res) {
        setUser(res);
        router.push("/profile");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError((error as Error).message ?? "Oops... some error");
    }
  };

  const showToast = () => {
    toast(error);
    setError("");
    return undefined;
  };

  return (
    <AuthForm
      handleSubmit={handleSubmit}
      title="Sign In"
      borderColor="border-yellow-500"
    >
      <div className="flex flex-col gap-y-9 tablet:gap-y-8 mb-14 tablet:mb-13">
        <FormInput
          label="Email"
          id="email"
          type="email"
          name="email"
          hint="example@mail.com"
          twStylesLabel="text-yellow-500 mobile:text-s16 tablet:text-s20 uppercase"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          label="Password"
          id="password"
          type="password"
          name="password"
          hint="Enter your password"
          twStylesLabel="text-yellow-500 mobile:text-s16 tablet:text-s20 uppercase"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <ButtonText
        type="submit"
        text="Log In"
        handler={() => {}}
        twStyles="p-3.5 min-w-0 my-0 mb-10 mx-auto block w-full tablet:max-w-58 text-yellow-500 mobile:text-s20 tablet-big:text-s24 font-medium border cursor-pointer"
        bgColorHover="var(--color-yellow-500)"
        borderColorHover="var(--color-yellow-500)"
      />

      <p className="text-white-400 mobile:text-s16 tablet:text-s20 text-center max-tablet:flex max-tablet:flex-col max-tablet:gap-1">
        New to Notehub?&nbsp;
        <Link
          href="/sign-up"
          className="text-yellow-500 hover:text-white-950 focus:text-white-950 transition-colors duration-300"
        >
          Create an account.
        </Link>
      </p>

      {error != "" && showToast()}
    </AuthForm>
  );
}
