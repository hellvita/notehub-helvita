"use client";

import { useReducer, useEffect } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import AuthForm from "@/components/Auth/AuthForm";
import FormInput from "@/components/parts/FormInput/FormInput";
import ButtonText from "@/components/parts/ButtonText/ButtonText";
import Link from "next/link";

interface FormDataType {
  email: string;
  password: string;
}

interface FormState {
  values: FormDataType;
  error: string;
}

type FormAction =
  | {
      type: "SET_FIELD";
      field: keyof FormDataType;
      value: string;
    }
  | { type: "SET_ERROR"; message: string }
  | { type: "RESET_FORM" }
  | { type: "CLEAR_ERROR" };

const initialState: FormState = {
  values: { email: "", password: "" },
  error: "",
};

const loginReducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        values: { ...state.values, [action.field]: action.value },
        error: "",
      };
    case "SET_ERROR":
      return { ...state, error: action.message };
    case "RESET_FORM":
      return initialState;
    case "CLEAR_ERROR":
      return { ...state, error: "" };
    default:
      return state;
  }
};

export default function LoginPage() {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);

  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { values, error } = state;

  useEffect(() => {
    if (error) {
      toast(error);
      dispatch({ type: "CLEAR_ERROR" });
    }
  }, [error]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name as keyof FormDataType,
      value: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await login({
        email: values.email,
        password: values.password,
      });

      if (res) {
        setUser(res);
        router.push("/profile");
      } else {
        dispatch({ type: "SET_ERROR", message: "Invalid email or password" });
      }
    } catch (error) {
      const errorCode = (error as AxiosError).response?.status.toString() ?? "";
      const errorMessage =
        errorCode === "400" || errorCode === "401"
          ? "Invalid email or password"
          : ((error as Error).message ?? "Oops... some error");

      dispatch({
        type: "SET_ERROR",
        message: errorMessage,
      });
    }
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
          value={values.email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          id="password"
          type="password"
          name="password"
          hint="Enter your password"
          twStylesLabel="text-yellow-500 mobile:text-s16 tablet:text-s20 uppercase"
          value={values.password}
          onChange={handleChange}
        />
      </div>

      <ButtonText
        type="submit"
        text="Log In"
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
    </AuthForm>
  );
}
