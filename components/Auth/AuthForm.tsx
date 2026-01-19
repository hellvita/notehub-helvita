"use client";

interface AuthFormProps {
  handleSubmit: (formData: FormData) => void;
  title: string;
  children: React.ReactNode;
}

export default function AuthForm({
  handleSubmit,
  title,
  children,
}: AuthFormProps) {
  return (
    <form action={handleSubmit} className="py-12 px-5 tablet-big:px-10">
      <h1 className="mobile:leading-none mobile:text-s56 font-medium">
        {title}
      </h1>
      {children}
    </form>
  );
}
