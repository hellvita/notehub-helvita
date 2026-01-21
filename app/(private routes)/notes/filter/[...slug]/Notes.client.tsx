import SearchBar from "@/components/Notes/SearchBar/SearchBar";
import { NoteTag } from "@/types/note";

interface NotesClientProps {
  currentTag?: NoteTag;
}

export default function NotesClient({ currentTag }: NotesClientProps) {
  return (
    <div>
      <SearchBar />
      <p>Notes</p>
    </div>
  );
}
