"use client";

import { motion } from "motion/react";
import Link from "next/link";

interface ButtonLinkProps {
  text: string;
  href?: string;
  twStyles?: string;
  twStylesAdditional?: string;
  textColorHover?: string;
  bgColorHover?: string;
  borderColorHover?: string;
}

const MotionLink = motion.create(Link);

export default function ButtonLink({
  text,
  href = "/",
  twStyles = "px-5 text-green-200 text-s16 font-normal border cursor-pointer",
  twStylesAdditional = "",
  textColorHover = "var(--color-black-900)",
  bgColorHover = "var(--color-green-200)",
  borderColorHover = "var(--color-green-200)",
}: ButtonLinkProps) {
  return (
    <MotionLink
      href={href}
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
    </MotionLink>
  );
}
