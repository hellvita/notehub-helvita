"use client";

import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { fetchNoteById } from "@/lib/api/clientApi";
import Loader from "@/components/Loader/Loader";
import Modal from "@/components/Modal/Modal";
import Note from "@/components/NoteDetails/Note/Note";
import toast from "react-hot-toast";

export default function NotePreviewClient() {
  const { id } = useParams<{ id: string }>();

  const router = useRouter();
  const handleClose = () => router.back();

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

  useEffect(() => {
    if (!isLoading) {
      let message = "";

      if (error) {
        message = (error as Error).message;
      } else if (!note) {
        message = "Data was not loaded";
      }

      if (message) {
        toast(message);
      }
    }
  }, [error, note, isLoading]);

  return (
    <Modal onClose={handleClose}>
      {isLoading && <Loader />}
      {note && <Note note={note} preview />}
    </Modal>
  );
}
