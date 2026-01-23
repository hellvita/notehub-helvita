"use client";

import ButtonBack from "@/components/NoteDetails/ButtonBack/ButtonBack";
import ButtonText from "../parts/ButtonText/ButtonText";
import { Note } from "@/types/note";

interface NoteFormProps {
  note?: Note;
  edit?: boolean;
  handelSubmit: () => void;
}

export default function NoteForm({
  note,
  edit = false,
  handelSubmit,
}: NoteFormProps) {
  return (
    <form
      action={handelSubmit}
      className="flex flex-col tablet:w-135 tablet-big:w-200 mx-auto"
    >
      <div className="tablet-big:mb-7 flex gap-2 items-center justify-between">
        <ButtonBack backPath="/notes/filter/all" />
        <h1 className="max-tablet-big:hidden ">{`${edit ? "Edit" : "Create"} note`}</h1>
        <ButtonText text="Save" type="submit" />
      </div>
    </form>
  );
}
