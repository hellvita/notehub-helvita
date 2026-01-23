"use client";

import ButtonBack from "@/components/NoteDetails/ButtonBack/ButtonBack";
import ButtonText from "../parts/ButtonText/ButtonText";
import TagList from "../Notes/filterBar/TagList/TagList";
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
      className="flex flex-col tablet:w-135 tablet-big:w-200 mx-auto leading-auto"
    >
      <div className="tablet-big:mb-7 flex gap-2 items-center justify-between">
        <ButtonBack backPath="/notes/filter/all" />
        <h1 className="max-tablet-big:hidden">{`${edit ? "Edit" : "Create"} note`}</h1>
        <ButtonText
          text="Save"
          type="submit"
          twStyles="max-tablet-big:hidden px-5 text-yellow-500 text-s16 font-normal border cursor-pointer"
          bgColorHover="var(--color-yellow-500)"
          borderColorHover="var(--color-yellow-500)"
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
          className="w-full mobile:leading-7 mobile:text-s20 text-white-400 placeholder:text-white-400/50 resize-none field-sizing-content overflow-hidden outline-none mb-8"
        ></textarea>

        <TagList
          fieldId={fieldId}
          isInput
          twStylesContainer="mb-8 flex flex-wrap items-center justify-center gap-x-2 tablet:gap-x-5 gap-y-3 tablet:gap-y-6"
          twStylesItem="mobile:text-s12 px-4 py-0.5"
        />

        <ButtonText
          text="Save"
          type="submit"
          twStyles="tablet-big:hidden px-5 py-1 text-yellow-500 text-s16 font-normal border cursor-pointer w-full"
          bgColorHover="var(--color-yellow-500)"
          borderColorHover="var(--color-yellow-500)"
        />
      </div>
    </form>
  );
}
