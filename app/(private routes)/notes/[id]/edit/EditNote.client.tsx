"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { UpdatedNote, NoteTag } from "@/types/note";
import { fetchNoteById, updateNoteById } from "@/lib/api/clientApi";
import toast from "react-hot-toast";
import Loader from "@/components/Loader/Loader";
import NoteForm from "@/components/NoteForm/NoteForm";

export default function EditNoteClient() {
  const { id } = useParams<{ id: string }>();

  const queryClient = useQueryClient();
  const router = useRouter();

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

  const { mutate } = useMutation({
    mutationFn: updateNoteById,
    onSuccess: (updatedNote) => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      toast(`The '${updatedNote.title}' note has been updated!`);
      router.push("/notes/filter/all");
    },
    onError: () => toast("Could not save changes, please try again..."),
  });

  const handleSubmit = async (formData: FormData) => {
    const rawValues = Object.fromEntries(formData);
    const values: UpdatedNote = {
      id,
      body: {
        title: String(rawValues.title),
        content: String(rawValues.content),
        tag: String(rawValues.tag) as NoteTag,
      },
    };

    mutate(values);
  };

  if (isLoading) return <Loader />;

  if (error || !note) throw error ? error : new Error("Data was not loaded");

  return (
    <div className="grow bg-black-900 p-5 tablet-big:p-10 ">
      <NoteForm note={note} edit handelSubmit={handleSubmit} />
    </div>
  );
}
