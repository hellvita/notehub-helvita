"use client";

import { motion } from "motion/react";
import { CiEdit as IconEdit } from "react-icons/ci";

export default function EditButton() {
  return (
    <motion.button>
      <IconEdit />
    </motion.button>
  );
}
