"use client";

import { useState } from "react";
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
  const [isError, setIsError] = useState<string>("");

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

  if (error || !note) {
    setIsError(error ? error.message : "Data was not loaded");
  }

  const showToast = () => {
    toast(isError);
    setIsError("");
    return undefined;
  };

  return (
    <Modal onClose={handleClose}>
      {isLoading && <Loader />}
      {(error || !note) && !isLoading && showToast()}
      {note && <Note note={note} preview />}
    </Modal>
  );
}
