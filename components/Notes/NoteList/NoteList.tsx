"use client";

import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteNote } from "@/lib/api/clientApi";
import toast from "react-hot-toast";
import NoteCard from "../Note/NoteCard";
import { Note } from "@/types/note";
import { useNoteCountStore } from "@/lib/store/noteStore";

interface NoteListProps {
  notes: Note[];
}

export default function NoteList({ notes }: NoteListProps) {
  const queryClient = useQueryClient();
  const decreaseNoteAmount = useNoteCountStore(
    (state) => state.decreaseNoteAmount,
  );

  const mutation = useMutation({
    mutationFn: async (id: string) => deleteNote(id),
    onSuccess: (deletedNote) => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });

      decreaseNoteAmount();

      toast(`The '${deletedNote.title}' note has been deleted!`);
    },
    onError: () => toast("Could not delete note, please try again..."),
  });

  const handleDeleteNote = (id: string) => {
    const noteTitle = notes.find((note) => note.id === id)?.title;

    if (typeof window !== "undefined") {
      const confirmed = window.confirm(`Delete the '${noteTitle}' note?`);

      if (confirmed) {
        mutation.mutate(id);
      }
    }
  };

  return (
    <ul className="grid justify-center grid-cols-[repeat(100%,1fr)] grid-sm:grid-cols-[repeat(auto-fill,372px)] gap-y-5 tablet:gap-8 tablet:max-w-315 mb-10">
      {notes.toReversed().map((note) => (
        <NoteCard note={note} key={note.id} handleDelete={handleDeleteNote} />
      ))}
    </ul>
  );
}
