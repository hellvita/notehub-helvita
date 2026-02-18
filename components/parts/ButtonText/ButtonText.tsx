"use client";

import { motion } from "motion/react";

interface ButtonTextProps {
  text: string;
  handler?: () => void;
  twStyles?: string;
  twStylesAdditional?: string;
  textColorHover?: string;
  bgColorHover?: string;
  borderColorHover?: string;
  type?: "button" | "submit" | "reset" | undefined;
  isLoading?: boolean;
}

export default function ButtonText({
  text,
  handler,
  twStyles = "px-5 text-green-200 text-s16 font-normal border",
  twStylesAdditional = "",
  textColorHover = "var(--color-black-900)",
  bgColorHover = "var(--color-green-200)",
  borderColorHover = "var(--color-green-200)",
  type = "button",
  isLoading = false,
}: ButtonTextProps) {
  return (
    <motion.button
      onClick={handler}
      type={type}
      disabled={isLoading}
      className={`${twStyles} ${twStylesAdditional} ${isLoading ? "pointer-events-none" : "cursor-pointer"}`}
      whileHover={
        isLoading
          ? {}
          : {
              color: textColorHover,
              backgroundColor: bgColorHover,
              borderColor: borderColorHover,
            }
      }
      whileFocus={
        isLoading
          ? {}
          : {
              color: textColorHover,
              backgroundColor: bgColorHover,
              borderColor: borderColorHover,
            }
      }
      whileTap={
        isLoading
          ? {}
          : {
              color: textColorHover,
              backgroundColor: bgColorHover,
              borderColor: borderColorHover,
            }
      }
      transition={{ duration: 0.3 }}
    >
      {text}
    </motion.button>
  );
}
