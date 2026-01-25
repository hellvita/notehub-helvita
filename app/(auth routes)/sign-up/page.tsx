"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { register, RegisterRequest } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import toast from "react-hot-toast";
import AuthForm from "@/components/Auth/AuthForm";
import FormInput from "@/components/parts/FormInput/FormInput";
import ButtonText from "@/components/parts/ButtonText/ButtonText";

interface FormDataType {
  email: string;
  password: string;
  confirm: string;
}

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const setUser = useAuthStore((state) => state.setUser);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");

  const handleSubmit = async (formData: FormData) => {
    try {
      setError("");

      const rawFormValues = Object.fromEntries(
        formData,
      ) as unknown as FormDataType;

      if (rawFormValues.password !== rawFormValues.confirm) {
        throw Error("Passwords must match");
      }

      const formValues: RegisterRequest = {
        email: rawFormValues.email,
        password: rawFormValues.password,
      };

      const res = await register(formValues);

      if (res) {
        setUser(res);
        router.push("/profile");
      } else {
        setError("This email is already in use");
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
    <AuthForm handleSubmit={handleSubmit} title="Sign Up">
      <div className="flex flex-col gap-y-9 tablet:gap-y-8 mb-14 tablet:mb-13">
        <FormInput
          label="Email"
          id="email"
          type="email"
          name="email"
          hint="example@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          label="Password"
          id="password"
          type="password"
          name="password"
          hint="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormInput
          label="Confirm"
          id="confirm"
          type="password"
          name="confirm"
          hint="Confirm your password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
      </div>

      <ButtonText
        type="submit"
        text="Register"
        handler={() => {}}
        twStyles="p-3.5 min-w-0 my-0 mx-auto block w-full tablet:max-w-58 text-green-200 mobile:text-s20 tablet-big:text-s24 font-medium border cursor-pointer"
      />

      {error != "" && showToast()}
    </AuthForm>
  );
}
