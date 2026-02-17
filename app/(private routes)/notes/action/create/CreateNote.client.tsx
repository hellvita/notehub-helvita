"use client";

import { useRouter } from "next/navigation";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { NewNote, NoteTag } from "@/types/note";
import { createNote } from "@/lib/api/clientApi";
import { useNoteDraftStore } from "@/lib/store/noteStore";
import toast from "react-hot-toast";
import NoteForm from "@/components/NoteForm/NoteForm";

export default function CreateNoteClient() {
  const router = useRouter();

  const queryClient = useQueryClient();
  const { draft, setDraft, clearDraft } = useNoteDraftStore();

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setDraft({ ...draft, [event.target.name]: event.target.value });
  };

  const { mutate } = useMutation({
    mutationFn: createNote,
    onSuccess: (newNote) => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      toast(`The '${newNote.title}' note has been added!`);
      clearDraft();
      router.push("/notes/filter/all");
    },
    onError: () => toast("Could not save changes, please try again..."),
  });

  const handleSubmit = (formData: FormData) => {
    const rawValues = Object.fromEntries(formData);

    const values: NewNote = {
      title: String(rawValues.title),
      content: String(rawValues.content),
      tag: String(rawValues.tag) as NoteTag,
    };

    mutate(values);
  };

  return (
    <div className="grow bg-black-900 p-5 tablet-big:p-10 ">
      <NoteForm
        handelSubmit={handleSubmit}
        handleChange={handleChange}
        draft={draft}
      />
    </div>
  );
}
