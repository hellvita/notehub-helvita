import NoteDetailsClient from "./NoteDetails.client";

interface NoteDetailsProps {
  params: Promise<{ id: string }>;
}

export default async function NoteDetails({ params }: NoteDetailsProps) {
  const { id } = await params;

  return <NoteDetailsClient />;
}
