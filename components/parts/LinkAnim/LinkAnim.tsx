"use client";

import { useModalStore } from "@/lib/store/modalStore";
import { motion } from "motion/react";
import Link from "next/link";
import { useWindowWidth } from "@/lib/hooks/useWindowWidth";
import { convertToRgba } from "@/lib/utils/colors";

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
  const { isOpen, setIsOpen } = useModalStore();
  const width = useWindowWidth();

  let bgColor: string = "rgba(0, 0, 0, 0)";
  if (width && width >= 700) {
    bgColor = "rgba(0, 0, 0, 0)";
  } else {
    bgColor = convertToRgba(colorHover, 0.08);
  }

  return (
    <MotionLink
      href={href}
      onClick={() => {
        if (isOpen) setIsOpen(false);
      }}
      aria-label={ariaLabel}
      prefetch={prefetch}
      className={twStyles}
      whileHover={{
        color: colorHover,
        opacity: opacityHover,
        backgroundColor: bgColor,
      }}
      whileFocus={{
        color: colorHover,
        opacity: opacityHover,
        backgroundColor: bgColor,
      }}
      whileTap={{
        color: colorHover,
        opacity: opacityHover,
        backgroundColor: bgColor,
      }}
      transition={{ duration: 0.3 }}
    >
      {text}
    </MotionLink>
  );
}
