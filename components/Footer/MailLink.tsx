"use client";

import { motion } from "motion/react";

interface MailLinkProps {
  mail: string;
}

export default function MailLink({ mail }: MailLinkProps) {
  return (
    <motion.a
      href={`mailto:${mail}`}
      whileHover={{
        color: "var(--color-white-950)",
        textDecoration: "underline",
      }}
      whileFocus={{
        color: "var(--color-white-950)",
        textDecoration: "underline",
      }}
      whileTap={{
        color: "var(--color-white-950)",
        textDecoration: "underline",
      }}
      transition={{ duration: 0.5 }}
    >
      {mail}
    </motion.a>
  );
}
