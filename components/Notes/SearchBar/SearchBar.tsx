"use client";

import { motion } from "motion/react";

interface SearchBarProps {
  query: string;
  onSearch: (query: string) => void;
}

export default function SearchBar() {
  return (
    <motion.input
      type="text"
      placeholder="Search notes"
      className="border border-white-950/10 bg-white-950/2 w-full tablet-big:max-w-2xl p-4 mobile:text-s20 placeholder:text-white-400/50 text-white-950 outline-0"
      whileFocus={{ borderColor: "var(--color-blue-400)" }}
      whileTap={{ borderColor: "var(--color-blue-400)" }}
    />
  );
}
