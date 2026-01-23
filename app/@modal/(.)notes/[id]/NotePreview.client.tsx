"use client";

import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import Note from "@/components/NoteDetails/Note/Note";
import { Note as TypeNote } from "@/types/note";

export default function NotePreviewClient() {
  const router = useRouter();

  const handleBack = () => router.push("/notes/filter/all");

  const tempNote: TypeNote = {
    id: "note-temp",
    title: "Team Meeting Notes",
    content:
      "Discussed sprint retrospective findings and action items for next iteration. Focus on improving code review process. And more text here, more more more",
    tag: "Meeting",
    createdAt: "2025-12-29T13:19:26.432Z",
    updatedAt: "2025-12-29T13:19:26.432Z",
  };

  return (
    <Modal onClose={handleBack}>
      <Note note={tempNote} preview />
    </Modal>
  );
}
