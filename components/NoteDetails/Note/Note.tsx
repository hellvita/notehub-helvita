"use client";

import { useRouter } from "next/navigation";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { deleteNote } from "@/lib/api/clientApi";
import toast from "react-hot-toast";
import DeleteButton from "../../Notes/Note/DeleteButton/DeleteButton";
import ButtonBack from "../ButtonBack/ButtonBack";
import TagLabel from "@/components/Notes/Note/TagLabel/TagLabel";
import EditTime from "../EditTime/EditTime";
import EditButton from "@/components/Notes/Note/EditButton/EditButton";
import { Note as TypeNote } from "@/types/note";

interface NoteProps {
  note: TypeNote;
  preview?: boolean;
}

export default function Note({ note, preview = false }: NoteProps) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (id: string) => deleteNote(id),
    onSuccess: (deletedNote) => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      toast(`The '${deletedNote.title}' note has been deleted!`);
      router.back();
    },
    onError: () => toast("Could not delete note, please try again..."),
  });

  const handleDeleteNote = (id: string) => {
    mutation.mutate(id);
  };

  return (
    <div
      className={`relative bg-black-800 p-6 pb-0 ${preview ? "min-[530px]:w-113 tablet-big:w-200" : ""}`}
    >
      <DeleteButton id={note.id} handleDelete={handleDeleteNote} />

      <div className="flex gap-x-3 items-center tablet-big:justify-center w-full mb-4">
        <ButtonBack backPath="/notes/filter/all" mobile preview={preview} />
        <h2 className="text-center w-[70%] tablet:w-[80%] mobile:text-s28 tablet-big:text-s24 font-medium">
          {note.title}
        </h2>
      </div>

      <p className="mobile:leading-7 mobile:text-s20 text-white-400">
        {note.content}
      </p>

      <div className="sticky bottom-0 flex justify-between items-center flex-wrap gap-2 bg-linear-to-b from-black-800/0 via-black-800/97 to-black-800 pt-5 pb-6">
        <TagLabel tagName={note.tag} />
        <EditTime dataTime={note.updatedAt ? note.updatedAt : note.createdAt} />
        <EditButton noteId={note.id} />
      </div>
    </div>
  );
}
