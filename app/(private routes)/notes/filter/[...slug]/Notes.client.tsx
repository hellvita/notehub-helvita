"use client";

import { fetchNotes } from "@/lib/api/clientApi";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import SearchBar from "@/components/Notes/SearchBar/SearchBar";
import NoResultMessage from "@/components/Notes/NoResultMessage/NoResultMessage";
import ButtonText from "@/components/parts/ButtonText/ButtonText";
import NoteList from "@/components/Notes/NoteList/NoteList";
import Pagination from "@/components/Notes/Pagination/Pagination";
import CreateButtonMobile from "@/components/Notes/CreateButtonMobile/CreateButtonMobile";
import { NoteTag, TAG_TYPES } from "@/types/note";
import { useNoteCountStore } from "@/lib/store/noteStore";
import toast from "react-hot-toast";

interface NotesClientProps {
  currentTag?: NoteTag;
}

export default function NotesClient({ currentTag }: NotesClientProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { LIMIT, count } = useNoteCountStore();

  const isValidRoute = (route: string | undefined): boolean =>
    route ? (TAG_TYPES as readonly string[]).includes(route) : true;

  if (!isValidRoute(currentTag)) notFound();

  const { data, isSuccess } = useQuery({
    queryKey: ["notes", currentPage, searchQuery, currentTag],
    queryFn: () =>
      fetchNotes({
        page: currentPage,
        search: searchQuery !== "" ? searchQuery : undefined,
        tag: currentTag,
      }),
    placeholderData: keepPreviousData,
    throwOnError: true,
    staleTime: 60 * 1000,
  });

  const totalPages = data?.totalPages ?? 0;

  const handleSearch = useDebouncedCallback((value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  }, 1000);

  const router = useRouter();

  const handleCreateNote = () => {
    if (count >= LIMIT) {
      toast(`You have reached limit in ${LIMIT} notes!`);
    } else {
      router.push("/notes/action/create");
    }
  };

  return (
    <div className="relative">
      <div className="mb-7 flex items-center justify-center gap-x-7">
        <SearchBar query={searchQuery} onSearch={handleSearch} />
        <ButtonText
          handler={handleCreateNote}
          text="Create note +"
          twStyles="px-6 py-4 text-blue-400 text-s20 font-medium border cursor-pointer max-tablet-big:hidden"
          bgColorHover="var(--color-blue-400)"
          borderColorHover="var(--color-blue-400)"
        />
      </div>

      {isSuccess && data.notes.length === 0 && searchQuery !== "" && (
        <NoResultMessage invalidQuery={searchQuery} />
      )}

      {data && data.notes.length > 0 && <NoteList notes={data.notes} />}

      {isSuccess && totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}

      <CreateButtonMobile handler={handleCreateNote} />
    </div>
  );
}
