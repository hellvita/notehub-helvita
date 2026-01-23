"use client";

import NoteForm from "@/components/NoteForm/NoteForm";

export default function CreateNoteClient() {
  return (
    <div className="grow bg-black-900 p-5 tablet-big:p-10 ">
      <NoteForm handelSubmit={() => {}} />
    </div>
  );
}
