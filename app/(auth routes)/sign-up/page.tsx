"use client";

import AuthForm from "@/components/Profile/Auth/AuthForm";
import FormInput from "@/components/parts/FormInput/FormInput";
import ButtonText from "@/components/parts/ButtonText/ButtonText";

export default function RegisterPage() {
  return (
    <AuthForm handleSubmit={() => {}} title="Sign Up">
      <div className="flex flex-col gap-y-9 tablet:gap-y-8 mb-14 tablet:mb-13">
        <FormInput
          label="Email"
          id="email"
          type="email"
          name="email"
          hint="example@mail.com"
        />
        <FormInput
          label="Password"
          id="password"
          type="password"
          name="password"
          hint="Enter your password"
        />
        <FormInput
          label="Confirm"
          id="confirm"
          type="password"
          name="confirm"
          hint="Confirm your password"
        />
      </div>

      <ButtonText
        type="submit"
        text="Register"
        handler={() => {}}
        twStyles="p-3.5 min-w-0 my-0 mx-auto block w-full tablet:max-w-58 text-green-200 mobile:text-s20 tablet-big:text-s24 font-medium border cursor-pointer"
      />
    </AuthForm>
  );
}
