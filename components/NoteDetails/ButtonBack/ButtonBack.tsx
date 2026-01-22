"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeftLong as IconBack } from "react-icons/fa6";

interface ButtonBackProps {
  backPath: string;
}

export default function ButtonBack({ backPath }: ButtonBackProps) {
  const router = useRouter();

  const handleBack = () => router.push(backPath);

  return (
    <button
      onClick={handleBack}
      className="group tablet-big:hidden p-1 cursor-pointer"
    >
      <IconBack
        className="group-hover:fill-blue-400 transition-colors duration-300 mobile:text-s24"
        aria-label="return back"
      />
    </button>
  );
}
