"use client";

import Note from "@/components/NoteDetails/Note/Note";

export default function NoteDetailsClient() {
  return (
    <div className="flex flex-col gap-y-8 grow bg-black-900 p-5 tablet-big:p-10">
      <Note />
    </div>
  );
}
