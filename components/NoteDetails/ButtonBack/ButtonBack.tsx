"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeftLong as IconBack } from "react-icons/fa6";
import ButtonText from "@/components/parts/ButtonText/ButtonText";

interface ButtonBackProps {
  backPath: string;
  mobile?: boolean;
  preview?: boolean;
}

export default function ButtonBack({
  backPath,
  mobile = false,
  preview = false,
}: ButtonBackProps) {
  const router = useRouter();

  const handleBack = () => router.push(backPath);

  return mobile ? (
    <button
      onClick={handleBack}
      type="button"
      className={`group p-1 cursor-pointer ${preview ? "" : "tablet-big:hidden"}`}
    >
      <IconBack
        className="group-hover:fill-blue-400 group-hover:scale-90 transition-colors duration-300 mobile:text-s24"
        aria-label="return back"
      />
    </button>
  ) : (
    <ButtonText
      text="Back"
      handler={handleBack}
      type="button"
      twStyles="max-tablet-big:hidden max-w-19 border text-white-950/90 border-white-950/30"
      bgColorHover="var(--color-black-900)"
      borderColorHover="var(--color-blue-400)"
      textColorHover="var(--color-blue-400)"
    />
  );
}
