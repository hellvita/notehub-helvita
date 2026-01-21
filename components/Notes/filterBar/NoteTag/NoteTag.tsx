"use client";

import { motion } from "motion/react";
import { convertToRgba } from "@/lib/utils/colors";

interface NoteTagProps {
  tagName: string;
  active?: boolean;
  key?: number | null | undefined;
}

export default function NoteTag({
  tagName,
  key = undefined,
  active = false,
}: NoteTagProps) {
  const animStyle = active
    ? {}
    : {
        y: "-4px",
        borderColor: "var(--color-pink-400)",
        backgroundColor: convertToRgba("var(--color-pink-400)", 0.1),
      };

  return (
    <motion.li
      key={key}
      className={`inline mobile:text-s20 tablet:text-s24 font-light uppercase px-4 py-3 tablet:py-2.5 border rounded-[28px]  ${active ? "bg-pink-400 border-pink-400 text-black-900 font-medium selection:bg-white-950/90 selection:text-purple-800" : "bg-transparent border-pink-400/50 text-pink-400 cursor-pointer selection:text-blue-400 selection:bg-blue-400-12"}`}
      whileHover={animStyle}
      whileFocus={animStyle}
      whileTap={animStyle}
      transition={{ duration: 0.3 }}
    >
      {tagName}
    </motion.li>
  );
}
