import NotePreviewClient from "./NotePreview.client";

interface NotePreviewProps {
  params: Promise<{ id: string }>;
}

export default async function NotesPreview({ params }: NotePreviewProps) {
  const { id } = await params;

  return <NotePreviewClient />;
}
