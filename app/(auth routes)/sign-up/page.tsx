"use client";

import { useReducer, useEffect } from "react";
import { useRouter } from "next/navigation";
import { register } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import AuthForm from "@/components/Auth/AuthForm";
import FormInput from "@/components/parts/FormInput/FormInput";
import ButtonText from "@/components/parts/ButtonText/ButtonText";

interface FormDataType {
  email: string;
  password: string;
  confirm: string;
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
  values: { email: "", password: "", confirm: "" },
  error: "",
};

const registerReducer = (state: FormState, action: FormAction): FormState => {
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

export default function RegisterPage() {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);

  const [state, dispatch] = useReducer(registerReducer, initialState);
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
      if (values.password !== values.confirm) {
        return dispatch({ type: "SET_ERROR", message: "Passwords must match" });
      }

      const res = await register({
        email: values.email,
        password: values.password,
      });

      if (res) {
        setUser(res);

        localStorage.setItem("newSession", JSON.stringify(true));

        router.push("/profile");
      } else {
        dispatch({
          type: "SET_ERROR",
          message: "This email is already in use",
        });
      }
    } catch (error) {
      const errorCode = (error as AxiosError).response?.status.toString() ?? "";
      const errorMessage =
        errorCode === "400"
          ? "Invalid email or password"
          : errorCode === "409"
            ? "This email is already in use"
            : ((error as Error).message ?? "Oops... some error");

      dispatch({
        type: "SET_ERROR",
        message: errorMessage,
      });
    }
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
          value={values.email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          id="password"
          type="password"
          name="password"
          minLength={6}
          hint="Enter your password"
          value={values.password}
          onChange={handleChange}
        />
        <FormInput
          label="Confirm"
          id="confirm"
          type="password"
          name="confirm"
          minLength={6}
          hint="Confirm your password"
          value={values.confirm}
          onChange={handleChange}
        />
      </div>

      <ButtonText
        type="submit"
        text="Register"
        twStyles="p-3.5 min-w-0 my-0 mx-auto block w-full tablet:max-w-58 text-green-200 mobile:text-s20 tablet-big:text-s24 font-medium border cursor-pointer"
      />
    </AuthForm>
  );
}
