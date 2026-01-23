"use client";

import { useState } from "react";
import SearchBar from "@/components/Notes/SearchBar/SearchBar";
import ButtonLink from "@/components/parts/ButtonLink/ButtonLink";
import NoteList from "@/components/Notes/NoteList/NoteList";
import Pagination from "@/components/Notes/Pagination/Pagination";
import CreateButtonMobile from "@/components/Notes/CreateButtonMobile/CreateButtonMobile";
import { NoteTag, Note } from "@/types/note";

interface NotesClientProps {
  currentTag?: NoteTag;
}

export default function NotesClient({ currentTag }: NotesClientProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const tempNote: Note = {
    id: "note-temp",
    title: "Team Meeting Notes",
    content:
      "Discussed sprint retrospective findings and action items for next iteration. Focus on improving code review process. And more text here, more more more",
    tag: "Meeting",
    createdAt: "00",
    updatedAt: "00",
  };

  return (
    <div className="relative">
      <div className="mb-7 flex items-center justify-center gap-x-7">
        <SearchBar />
        <ButtonLink
          href="/notes/action/create"
          text="Create note +"
          twStyles="px-6 py-4 text-blue-400 text-s24 font-medium border cursor-pointer max-tablet-big:hidden"
          bgColorHover="var(--color-blue-400)"
          borderColorHover="var(--color-blue-400)"
        />
      </div>

      <NoteList notes={[tempNote]} />

      <Pagination
        totalPages={5}
        currentPage={1}
        setCurrentPage={setCurrentPage}
      />

      <CreateButtonMobile />
    </div>
  );
}
