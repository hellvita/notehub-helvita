"use client";

import AuthForm from "@/components/Auth/AuthForm";
import FormInput from "@/components/parts/FormInput/FormInput";

export default function RegisterPage() {
  return (
    <AuthForm handleSubmit={() => {}} title="Sign Up">
      <FormInput
        label="Email"
        id="email"
        type="email"
        name="email"
        hint="example@mail.com"
      />
      <p className="mt-10">** content</p>
    </AuthForm>
  );
}
