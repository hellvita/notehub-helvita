import NotesClient from "./Notes.client";
import { NoteTag } from "@/types/note";

interface NotesProps {
  params: Promise<{ slug: ("all" | NoteTag)[] }>;
}

export default async function Notes({ params }: NotesProps) {
  const { slug } = await params;
  const tag = slug[0] === "all" ? undefined : slug[0];

  return <NotesClient currentTag={tag} />;
}
