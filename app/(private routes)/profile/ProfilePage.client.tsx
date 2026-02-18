"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useNoteCountStore, useNoteDraftStore } from "@/lib/store/noteStore";
import { User } from "@/types/user";
import { Note } from "@/types/note";

interface ProfilePageClientProps {
  children: React.ReactNode;
  user: User;
  draft: Note;
}

export default function ProfilePageClient({
  children,
  user,
  draft,
}: ProfilePageClientProps) {
  const router = useRouter();
  const setCount = useNoteCountStore((state) => state.setCount);
  const setDraft = useNoteDraftStore((state) => state.setDraft);

  useEffect(() => {
    const storageValue: string | null = localStorage.getItem("newSession");

    const isFirstSession: boolean = storageValue
      ? JSON.parse(storageValue)
      : false;

    if (isFirstSession) {
      localStorage.setItem("newSession", JSON.stringify(false));

      setCount(user.notesAmount);

      setDraft(draft);

      router.refresh();
    }
  }, [router, setCount, user, setDraft, draft]);

  return <>{children}</>;
}
