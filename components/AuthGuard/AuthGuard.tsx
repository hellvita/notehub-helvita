"use client";

import { useAuthGuard } from "@/lib/hooks/useAuthGuard";
import Loader from "@/components/Loader/Loader";

interface AuthGuardProps {
  children: React.ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const ready = useAuthGuard(true);

  if (!ready) return <Loader />;

  return <>{children}</>;
}
