import SearchBar from "@/components/Notes/SearchBar/SearchBar";
import ButtonLink from "@/components/parts/ButtonLink/ButtonLink";
import NoteCard from "@/components/Notes/Note/NoteCard"; // ?? change to NoteList component
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

      <div className="flex justify-center">
        <NoteCard
          note={{
            id: "note-temp",
            title: "Team Meeting Notes",
            content:
              "Discussed sprint retrospective findings and action items for next iteration. Focus on improving code review process. And more text here, more more more",
            tag: "Meeting",
            createdAt: "00",
            updatedAt: "00",
          }}
        />
      </div>
    </div>
  );
}
