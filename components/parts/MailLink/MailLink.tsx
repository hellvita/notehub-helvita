"use client";

import { motion } from "motion/react";

interface MailLinkProps {
  mail: string;
  colorHover?: string;
  decorationHover?: string;
}

export default function MailLink({
  mail,
  colorHover = "#fff",
  decorationHover = "none",
}: MailLinkProps) {
  return (
    <motion.a
      href={`mailto:${mail}`}
      whileHover={{
        color: colorHover,
        textDecoration: decorationHover,
      }}
      whileFocus={{
        color: colorHover,
        textDecoration: decorationHover,
      }}
      whileTap={{
        color: colorHover,
        textDecoration: decorationHover,
      }}
      transition={{ duration: 0.5 }}
    >
      {mail}
    </motion.a>
  );
}
