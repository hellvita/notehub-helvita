"use client";

import Note from "@/components/NoteDetails/Note/Note";
import { Note as TypeNote } from "@/types/note";

export default function NoteDetailsClient() {
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
    <div className="flex flex-col gap-y-8 grow bg-black-900 p-5 tablet-big:p-10">
      <Note note={tempNote} />
    </div>
  );
}
