"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ProfilePageClientProps {
  children: React.ReactNode;
}

export default function ProfilePageClient({
  children,
}: ProfilePageClientProps) {
  const router = useRouter();

  useEffect(() => {
    const storageValue: string | null = localStorage.getItem("newSession");

    const isFirstSession: boolean = storageValue
      ? JSON.parse(storageValue)
      : false;

    if (isFirstSession) {
      localStorage.setItem("newSession", JSON.stringify(false));
      router.refresh();
    }
  }, [router]);

  return <>{children}</>;
}
