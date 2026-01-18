"use client";

import { motion } from "motion/react";
import Link from "next/link";

interface LinkAnimProps {
  href: string;
  ariaLabel?: string;
  prefetch?: boolean | "auto" | null | undefined;
  text?: string;
  twStyles?: string;
  colorHover?: string;
  opacityHover?: number;
}

const MotionLink = motion.create(Link);

export default function LinkAnim({
  href,
  ariaLabel = "",
  prefetch = true,
  text = "",
  twStyles = "",
  colorHover = "inherit",
  opacityHover = 1,
}: LinkAnimProps) {
  return (
    <MotionLink
      href={href}
      aria-label={ariaLabel}
      prefetch={prefetch}
      className={twStyles}
      whileHover={{ color: colorHover, opacity: opacityHover }}
      whileFocus={{ color: colorHover, opacity: opacityHover }}
      whileTap={{ color: colorHover, opacity: opacityHover }}
      transition={{ duration: 0.3 }}
    >
      {text}
    </MotionLink>
  );
}
