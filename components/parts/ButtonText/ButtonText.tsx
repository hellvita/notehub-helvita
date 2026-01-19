"use client";

import { motion } from "motion/react";

interface ButtonTextProps {
  text: string;
  handler: () => void;
  twStyles?: string;
  twStylesAdditional?: string;
  textColorHover?: string;
  bgColorHover?: string;
  borderColorHover?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export default function ButtonText({
  text,
  handler,
  twStyles = "px-5 text-green-200 text-s16 font-normal border cursor-pointer",
  twStylesAdditional = "",
  textColorHover = "var(--color-black-900)",
  bgColorHover = "var(--color-green-200)",
  borderColorHover = "var(--color-green-200)",
  type = "button",
}: ButtonTextProps) {
  return (
    <motion.button
      onClick={handler}
      type={type}
      className={`${twStyles} ${twStylesAdditional}`}
      whileHover={{
        color: textColorHover,
        backgroundColor: bgColorHover,
        borderColor: borderColorHover,
      }}
      whileFocus={{
        color: textColorHover,
        backgroundColor: bgColorHover,
        borderColor: borderColorHover,
      }}
      whileTap={{
        color: textColorHover,
        backgroundColor: bgColorHover,
        borderColor: borderColorHover,
      }}
      transition={{ duration: 0.3 }}
    >
      {text}
    </motion.button>
  );
}
