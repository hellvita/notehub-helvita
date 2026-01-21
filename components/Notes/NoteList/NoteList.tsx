import NoteCard from "../Note/NoteCard";
import { Note } from "@/types/note";

interface NoteListProps {
  notes: Note[];
}

export default function NoteList({ notes }: NoteListProps) {
  return (
    <ul className="grid justify-center grid-cols-[repeat(100%,1fr)] grid-sm:grid-cols-[repeat(auto-fill,372px)] gap-y-5 tablet:gap-8 tablet:max-w-315">
      {notes.map((note) => (
        <NoteCard note={note} key={note.id} />
      ))}
    </ul>
  );
}
