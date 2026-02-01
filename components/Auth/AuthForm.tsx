"use client";

interface AuthFormProps {
  handleSubmit: () => void;
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
      <h1 className="mobile:text-s32 tablet:text-s40 desktop:text-s56 font-medium mb-10">
        {title}
      </h1>
      {children}
    </form>
  );
}
