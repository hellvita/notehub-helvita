"use client";

import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { deleteNote } from "@/lib/api/clientApi";
import toast from "react-hot-toast";
import NoteCard from "../Note/NoteCard";
import { Note } from "@/types/note";
import { useNoteCountStore } from "@/lib/store/noteStore";
import ConfirmWindow from "@/components/ConfirmWindow/ConfirmWindow";

interface NoteListProps {
  notes: Note[];
}

export default function NoteList({ notes }: NoteListProps) {
  const [deletedNoteId, setDeletedNoteId] = useState<string>("");
  const [deletedNoteTitle, setDeletedNoteTitle] = useState<string>("");
  const [isConfirmWindow, setIsConfirmWindow] = useState<boolean>(false);

  const toggleConfirmWindow = () => {
    setIsConfirmWindow((v) => !v);
  };

  const queryClient = useQueryClient();
  const decreaseNoteAmount = useNoteCountStore(
    (state) => state.decreaseNoteAmount,
  );

  const mutation = useMutation({
    mutationFn: async (id: string) => deleteNote(id),
    onSuccess: (deletedNote) => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });

      decreaseNoteAmount();
      toggleConfirmWindow();

      toast(`The '${deletedNote.title}' note has been deleted!`);
    },
    onError: () => toast("Could not delete note, please try again..."),
  });

  const openConfirmWindow = (id: string) => {
    const noteTitle = notes.find((note) => note.id === id)?.title;
    if (noteTitle) {
      const titleStr = `'${noteTitle}'`;
      setDeletedNoteTitle(titleStr);
    }

    setDeletedNoteId(id);
    toggleConfirmWindow();
  };

  const handleDeleteNote = () => {
    if (deletedNoteId !== "") {
      mutation.mutate(deletedNoteId);
    } else {
      toast("Oops, some error! Please try again...");
    }
  };

  return (
    <>
      <ul className="grid justify-center grid-cols-[repeat(100%,1fr)] grid-sm:grid-cols-[repeat(auto-fill,372px)] gap-y-5 tablet:gap-8 tablet:max-w-315 mb-10">
        {notes.map((note) => (
          <NoteCard
            note={note}
            key={note.id}
            handleDelete={openConfirmWindow}
          />
        ))}
      </ul>

      {isConfirmWindow && (
        <ConfirmWindow
          question={`Delete the ${deletedNoteTitle} note?`}
          yes="Delete"
          no="Cancel"
          handleYes={handleDeleteNote}
          handleNo={toggleConfirmWindow}
        />
      )}
    </>
  );
}
