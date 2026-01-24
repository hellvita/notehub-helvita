"use client";

import { useState } from "react";
import { TAG_TYPES, NoteTag as TagType } from "@/types/note";
import NoteTag from "@/components/Notes/filterBar/NoteTag/NoteTag";

interface TagListProps {
  twStylesContainer?: string;
  twStylesItem?: string;
  isInput?: boolean;
  fieldId?: string | number;
}

export default function TagList({
  twStylesContainer = "mb-8 flex flex-wrap items-center justify-center gap-x-4 tablet:gap-x-5 gap-y-3 tablet:gap-y-6",
  twStylesItem,
  isInput = false,
  fieldId = "",
}: TagListProps) {
  const [activeTag, setActiveTag] = useState<TagType | "All">(
    isInput ? TAG_TYPES[0] : "All",
  );

  return (
    <ul className={twStylesContainer}>
      {!isInput && (
        <NoteTag
          tagName={`All`}
          active={activeTag === "All"}
          onSelect={() => setActiveTag("All")}
          twStyles={twStylesItem ? twStylesItem : undefined}
          isInput={isInput}
          fieldId={fieldId}
        />
      )}
      {TAG_TYPES.map((tag, index) => (
        <NoteTag
          key={index}
          onSelect={() => setActiveTag(tag)}
          tagName={tag}
          active={activeTag === tag}
          twStyles={twStylesItem ? twStylesItem : undefined}
          isInput={isInput}
          fieldId={fieldId}
          checked={activeTag === tag}
        />
      ))}
    </ul>
  );
}
