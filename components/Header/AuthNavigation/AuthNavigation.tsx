"use client";

import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/store/authStore";
import { useNoteCountStore, useNoteDraftStore } from "@/lib/store/noteStore";
import { updateMe, updateDraft, logout } from "@/lib/api/clientApi";
import NavMenu from "../NavMenu/NavMenu";
import NavMenuAuth from "../NavMenuAuth/NavMenuAuth";

export default function AuthNavigation() {
  const router = useRouter();
  const { isAuthenticated, user } = useAuthStore();
  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated,
  );
  const count = useNoteCountStore((state) => state.count);
  const draft = useNoteDraftStore((state) => state.draft);

  const handleLogout = async () => {
    await updateMe({ notesAmount: count });

    await updateDraft({
      title: draft.title,
      content: draft.content,
      tag: draft.tag,
    });

    await logout();

    clearIsAuthenticated();

    router.push("/sign-in");
  };

  return isAuthenticated ? (
    <NavMenuAuth user={user} handleLogout={handleLogout} />
  ) : (
    <NavMenu />
  );
}
