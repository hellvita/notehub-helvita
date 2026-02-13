"use client";

import { useAuthGuard } from "@/lib/hooks/useAuthGuard";
import Loader from "@/components/Loader/Loader";

interface PrivateLayoutProps {
  children: React.ReactNode;
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  const ready = useAuthGuard(true);

  if (!ready) return <Loader />;

  return children;
}
