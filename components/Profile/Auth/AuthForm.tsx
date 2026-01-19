"use client";

import ProfileTitle from "@/components/parts/ProfileTitle/ProfileTitle";

interface AuthFormProps {
  handleSubmit: (formData: FormData) => void;
  title: string;
  borderColor?: string;
  children: React.ReactNode;
}

export default function AuthForm({
  handleSubmit,
  title,
  borderColor = "border-t-green-200",
  children,
}: AuthFormProps) {
  return (
    <form
      action={handleSubmit}
      className={`py-12 px-5 tablet-big:px-10 bg-black-800 ${borderColor} border-t-3`}
    >
      <ProfileTitle title={title} />
      {children}
    </form>
  );
}
