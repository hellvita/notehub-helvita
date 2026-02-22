"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { fetchNoteById } from "@/lib/api/clientApi";
import Loader from "@/components/Loader/Loader";
import ButtonBack from "@/components/NoteDetails/ButtonBack/ButtonBack";
import Note from "@/components/NoteDetails/Note/Note";

export default function NoteDetailsClient() {
  const { id } = useParams<{ id: string }>();

  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
    staleTime: 60 * 1000,
  });

  if (isLoading) return <Loader />;

  if (error || !note) throw error ? error : new Error("Data was not loaded");

  return (
      <div className="grow bg-black-900 p-5 tablet-big:p-10 ">
        <div className="flex flex-col gap-y-7 tablet:w-135 tablet-big:w-200 mx-auto">
          <ButtonBack backPath="/notes/filter/all" />
          <Note note={note} />
        </div>
      </div>
  );
}
