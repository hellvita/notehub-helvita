"use client";

import { useState } from "react";
import { TAG_TYPES, NoteTag as TagType } from "@/types/note";
import NoteTag from "@/components/Notes/filterBar/NoteTag/NoteTag";

interface TagListProps {
  twStylesContainer?: string;
  twStylesItem?: string;
  isInput?: boolean;
  fieldId?: string | number;
  defaultTag?: TagType;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TagList({
  twStylesContainer = "mb-8 flex flex-wrap items-center justify-center gap-x-4 tablet:gap-x-5 gap-y-3 tablet:gap-y-6 max-w-205",
  twStylesItem,
  isInput = false,
  fieldId = "",
  defaultTag = TAG_TYPES[0],
  handleChange,
}: TagListProps) {
  const [activeTag, setActiveTag] = useState<TagType | "All">(
    isInput ? defaultTag : "All",
  );

  return (
    <ul className={twStylesContainer}>
      {!isInput && (
        <NoteTag
          tagName={`all`}
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
          handleChange={handleChange}
        />
      ))}
    </ul>
  );
}
