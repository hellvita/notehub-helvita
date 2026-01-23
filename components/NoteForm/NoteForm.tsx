"use client";

import ButtonBack from "@/components/NoteDetails/ButtonBack/ButtonBack";
import ButtonText from "../parts/ButtonText/ButtonText";
import { Note } from "@/types/note";
import { useId } from "react";

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
  const fieldId = useId();

  return (
    <form
      action={handelSubmit}
      className="flex flex-col tablet:w-135 tablet-big:w-200 mx-auto"
    >
      <div className="tablet-big:mb-7 flex gap-2 items-center justify-between">
        <ButtonBack backPath="/notes/filter/all" />
        <h1 className="max-tablet-big:hidden">{`${edit ? "Edit" : "Create"} note`}</h1>
        <ButtonText
          text="Save"
          type="submit"
          twStyles="max-tablet-big:hidden px-5 text-green-200 text-s16 font-normal border cursor-pointer"
        />
      </div>

      <div className="bg-black-800 p-6">
        <div className="flex gap-x-4 items-center tablet-big:justify-center w-full mb-3">
          <ButtonBack backPath="/notes/filter/all" mobile />
          <textarea
            name="title"
            id={`${fieldId}-title`}
            placeholder="Title"
            rows={1}
            required
            minLength={3}
            maxLength={50}
            className="text-center w-[90%] mobile:text-s28 tablet-big:text-s24 font-medium placeholder:text-white-950/50 resize-none field-sizing-content overflow-hidden outline-none"
          ></textarea>
        </div>

        <textarea
          name="content"
          id={`${fieldId}-content`}
          placeholder="Content"
          rows={1}
          maxLength={500}
          className="w-full mobile:leading-7 mobile:text-s20 text-white-400 placeholder:text-white-400/50 resize-none field-sizing-content overflow-hidden outline-none"
        ></textarea>
      </div>
    </form>
  );
}
