"use client";

import ButtonBack from "@/components/NoteDetails/ButtonBack/ButtonBack";
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
    <div className="grow bg-black-900 p-5 tablet-big:p-10 ">
      <div className="flex flex-col gap-y-7 tablet:w-135 tablet-big:w-200 mx-auto">
        <ButtonBack backPath="/notes/filter/all" />
        <Note note={tempNote} />
      </div>
    </div>
  );
}
