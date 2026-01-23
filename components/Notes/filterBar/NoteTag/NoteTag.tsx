"use client";

import { motion } from "motion/react";
import { useWindowWidth } from "@/lib/hooks/useWindowWidth";

interface NoteTagProps {
  tagName: string;
  active?: boolean;
  twStyles?: string;
  onSelect: () => void;
  isInput?: boolean;
  fieldId?: string | number;
}

export default function NoteTag({
  tagName,
  active = false,
  twStyles = "mobile:text-s20 tablet:text-s24 font-light uppercase px-4 py-3 tablet:py-2.5",
  onSelect,
  isInput = false,
  fieldId = "",
}: NoteTagProps) {
  const width = useWindowWidth();

  const motionHover = !active
    ? width > 1000
      ? { y: -4 }
      : { scale: 0.9 }
    : undefined;

  return isInput ? (
    <motion.li
      onClick={onSelect}
      whileHover={motionHover}
      whileTap={motionHover}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`
        ${twStyles}
        inline border rounded-[28px]
        transition-colors duration-300
        ${
          active
            ? "bg-pink-400 border-pink-400 text-black-900 font-medium selection:bg-white-950/90 selection:text-purple-800"
            : "bg-black-900 border-pink-400/50 text-pink-400 cursor-pointer hover:bg-pink-400/10 hover:border-pink-400 selection:text-blue-400 selection:bg-blue-400-12"
        }
      `}
    >
      {tagName}
    </motion.li>
  ) : (
    <motion.label
      onClick={onSelect}
      whileHover={motionHover}
      whileTap={motionHover}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`
        ${twStyles}
        inline border rounded-[28px]
        transition-colors duration-300
        ${
          active
            ? "bg-pink-400 border-pink-400 text-black-900 font-medium selection:bg-white-950/90 selection:text-purple-800"
            : "bg-black-900 border-pink-400/50 text-pink-400 cursor-pointer hover:bg-pink-400/10 hover:border-pink-400 selection:text-blue-400 selection:bg-blue-400-12"
        }
      `}
    >
      <input type="radio" name="tag" id={`${fieldId}-tag`} />
      {tagName}
    </motion.label>
  );
}
