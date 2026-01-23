"use client";

import { useState } from "react";
import { TAG_TYPES, NoteTag as TagType } from "@/types/note";
import NoteTag from "@/components/Notes/filterBar/NoteTag/NoteTag";

interface TagListProps {
  twStylesContainer?: string;
  twStylesItem?: string;
}

export default function TagList({
  twStylesContainer = "mb-8 flex flex-wrap items-center justify-center gap-x-4 tablet:gap-x-5 gap-y-3 tablet:gap-y-6",
  twStylesItem,
}: TagListProps) {
  const [activeTag, setActiveTag] = useState<TagType | "All">("All");

  return (
    <ul className={twStylesContainer}>
      <NoteTag
        tagName={`All`}
        active={activeTag === "All"}
        onSelect={() => setActiveTag("All")}
      />
      {TAG_TYPES.map((tag, index) => (
        <NoteTag
          key={index}
          onSelect={() => setActiveTag(tag)}
          tagName={tag}
          active={activeTag === tag}
          twStyles={twStylesItem ? twStylesItem : undefined}
        />
      ))}
    </ul>
  );
}
