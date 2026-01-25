"use client";

import ButtonBack from "@/components/NoteDetails/ButtonBack/ButtonBack";
import ButtonText from "../parts/ButtonText/ButtonText";
import TagList from "../Notes/filterBar/TagList/TagList";
import { Note, NoteTag } from "@/types/note";
import { useId } from "react";

interface NoteFormProps {
  note?: Note;
  edit?: boolean;
  draft?: { title: string; content: string; tag: NoteTag };
  handelSubmit: (formData: FormData) => void;
  handleChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export default function NoteForm({
  note,
  edit = false,
  draft,
  handelSubmit,
  handleChange,
}: NoteFormProps) {
  const fieldId = useId();

  return (
    <form
      action={handelSubmit}
      className="flex flex-col tablet:w-135 tablet-big:w-200 mx-auto leading-auto"
    >
      <div className="tablet-big:mb-7 flex gap-2 items-center justify-between">
        <ButtonBack backPath="/notes/filter/all" />
        <h1 className="max-tablet-big:hidden text-s40 font-medium">{`${edit ? "Edit" : "Create"} note`}</h1>
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
            defaultValue={note ? note.title : draft ? draft.title : undefined}
            rows={1}
            required
            minLength={3}
            maxLength={50}
            onChange={handleChange}
            className="text-center tablet-big:text-left w-[84%] tablet-big:w-full mobile:text-s28 tablet-big:text-s24 font-medium placeholder:text-white-950/50 resize-none field-sizing-content overflow-hidden outline-none"
          ></textarea>
        </div>

        <textarea
          name="content"
          id={`${fieldId}-content`}
          placeholder="Content"
          defaultValue={note ? note.content : draft ? draft.content : undefined}
          rows={3}
          maxLength={500}
          onChange={handleChange}
          className="w-full mobile:leading-7 mobile:text-s20 text-white-400 placeholder:text-white-400/50 resize-none field-sizing-content overflow-hidden outline-none whitespace-pre-wrap mb-8"
        ></textarea>

        <TagList
          fieldId={fieldId}
          isInput
          defaultTag={note ? note.tag : draft ? draft.tag : undefined}
          handleChange={handleChange}
          twStylesContainer="mb-8 tablet-big:mb-0 flex flex-wrap items-center justify-center gap-x-2 tablet:gap-x-5 gap-y-3 tablet:gap-y-6"
          twStylesItem="mobile:text-s12 px-4 py-0.5"
        />

        <ButtonText
          text="Save"
          type="submit"
          twStyles="tablet-big:hidden px-5 py-1 text-yellow-500 text-s16 font-normal border cursor-pointer w-full min-[520px]:max-w-54 mx-auto block"
          bgColorHover="var(--color-yellow-500)"
          borderColorHover="var(--color-yellow-500)"
        />
      </div>
    </form>
  );
}
