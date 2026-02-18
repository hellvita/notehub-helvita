"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useNoteCountStore } from "@/lib/store/noteStore";
import { User } from "@/types/user";

interface ProfilePageClientProps {
  children: React.ReactNode;
  user: User;
}

export default function ProfilePageClient({
  children,
  user,
}: ProfilePageClientProps) {
  const router = useRouter();
  const setCount = useNoteCountStore((state) => state.setCount);

  useEffect(() => {
    const storageValue: string | null = localStorage.getItem("newSession");

    const isFirstSession: boolean = storageValue
      ? JSON.parse(storageValue)
      : false;

    if (isFirstSession) {
      localStorage.setItem("newSession", JSON.stringify(false));
      setCount(user.notesAmount);
      router.refresh();
    }
  }, [router, setCount, user]);

  return <>{children}</>;
}
