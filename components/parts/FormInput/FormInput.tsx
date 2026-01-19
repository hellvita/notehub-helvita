"use client";

import { motion } from "motion/react";
import { convertToRgba } from "@/lib/utils/colors";

interface FormInputProps {
  id: string;
  type: string;
  name: string;
  label?: string;
  required?: boolean;
  hint?: string;
  twStylesContainer?: string;
  twStylesLabel?: string;
  twStylesInput?: string;
}

export default function FormInput({
  id,
  type,
  name,
  label,
  required = true,
  hint = "",
  twStylesContainer = "flex flex-col gap-2",
  twStylesLabel = "text-green-200 mobile:text-s16 tablet:text-s20",
  twStylesInput = "py-3 px-4 outline-0 mobile:text-s18 tablet:text-s24 placeholder:font-light placeholder:text-white-400/50",
}: FormInputProps) {
  const inputLabel = (label ? label : name).toUpperCase();

  return (
    <div className={twStylesContainer}>
      <label htmlFor={id} className={twStylesLabel}>
        {inputLabel}
      </label>
      <motion.input
        id={id}
        type={type}
        name={name}
        required={required}
        placeholder={hint}
        autoComplete="off"
        className={`${twStylesInput} bg-white-950/4`}
        whileTap={{
          backgroundColor: convertToRgba("var(--color-white-950)", 0.08),
        }}
        whileFocus={{
          backgroundColor: convertToRgba("var(--color-white-950)", 0.08),
        }}
      ></motion.input>
    </div>
  );
}
