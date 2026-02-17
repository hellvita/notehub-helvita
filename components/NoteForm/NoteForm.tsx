"use client";

import ButtonBack from "@/components/NoteDetails/ButtonBack/ButtonBack";
import ButtonText from "../parts/ButtonText/ButtonText";
import { Note, NoteTag, TAG_TYPES } from "@/types/note";
import { useId } from "react";

interface NoteFormProps {
  note?: Note;
  edit?: boolean;
  draft?: { title: string; content: string; tag: NoteTag };
  handelSubmit: (formData: FormData) => void;
  handleChange?: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
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
        <h1 className="max-tablet-big:hidden text-s40 font-medium selection:text-purple-800 selection:bg-pink-400">{`${edit ? "Edit" : "Create"} note`}</h1>
        <ButtonText
          text="Save"
          type="submit"
          twStyles="max-tablet-big:hidden px-5 text-yellow-500 text-s16 font-normal border cursor-pointer selection:text-purple-800 selection:bg-pink-400"
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
            className="text-center tablet-big:text-left w-[80%] tablet:w-[84%] tablet-big:w-full mobile:text-s28 tablet-big:text-s24 font-medium placeholder:text-white-950/50 resize-none field-sizing-content overflow-hidden outline-none selection:text-blue-400 selection:bg-blue-400-12"
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
          className="w-full mobile:leading-7 mobile:text-s20 text-white-400 placeholder:text-white-400/50 resize-none field-sizing-content overflow-hidden outline-none whitespace-pre-wrap mb-10 tablet:mb-8 selection:text-blue-400 selection:bg-blue-400-12"
        ></textarea>

        <label
          htmlFor={`${fieldId}-tag`}
          className="flex items-center mobile:justify-center max-mobile:flex-wrap gap-4 mb-8 tablet-big:mb-0 mobile:text-s20 max-w-200 mx-auto selection:text-blue-400 selection:bg-blue-400-12"
        >
          Tag:
          <select
            name="tag"
            id={`${fieldId}-tag`}
            defaultValue={note ? note.tag : draft ? draft.tag : TAG_TYPES[0]}
            onChange={handleChange}
            className="cursor-pointer outline-0 text-pink-400 bg-black-900/90 p-2 rounded-2xl w-full"
          >
            {TAG_TYPES.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </label>

        <ButtonText
          text="Save"
          type="submit"
          twStyles="tablet-big:hidden px-5 py-1 text-yellow-500 text-s16 font-normal border cursor-pointer w-full min-[520px]:max-w-54 mx-auto block selection:text-purple-800 selection:bg-pink-400"
          bgColorHover="var(--color-yellow-500)"
          borderColorHover="var(--color-yellow-500)"
        />
      </div>
    </form>
  );
}
