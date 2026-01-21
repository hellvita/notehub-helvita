import SearchBar from "@/components/Notes/SearchBar/SearchBar";
import ButtonLink from "@/components/parts/ButtonLink/ButtonLink";
import Note from "@/components/Notes/Note/Note"; // ?? change to NoteList component
import { NoteTag } from "@/types/note";

interface NotesClientProps {
  currentTag?: NoteTag;
}

export default function NotesClient({ currentTag }: NotesClientProps) {
  return (
    <div>
      <div className="mb-5 flex items-center justify-center gap-x-7">
        <SearchBar />
        <ButtonLink
          text="Create note +"
          twStyles="px-6 py-4 text-blue-400 text-s24 font-medium border cursor-pointer max-tablet-big:hidden"
          bgColorHover="var(--color-blue-400)"
          borderColorHover="var(--color-blue-400)"
        />
      </div>

      <Note />
    </div>
  );
}
