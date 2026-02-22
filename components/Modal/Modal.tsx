"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  overlay?: boolean;
}

export default function Modal({
  onClose,
  children,
  overlay = false,
}: ModalProps) {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      className={`fixed flex items-center justify-center ${overlay ? "z-200" : "z-100"} top-0 left-0 w-full h-full bg-white-950/10 p-10`}
    >
      {children}
    </div>,
    document.body,
  );
}
