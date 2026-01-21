import CloseButton from "./CloseButton/CloseButton";
import ButtonLink from "@/components/parts/ButtonLink/ButtonLink";
import TagLabel from "./TagLabel/TagLabel";
import EditButton from "./EditButton/EditButton";
import { Note } from "@/types/note";

interface NoteProps {
  note: Note;
}

export default function NoteCard({ note }: NoteProps) {
  // ** TODO sliceContent()

  return (
    <div className="relative w-full max-w-93 p-6 bg-black-800">
      <CloseButton />
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <div>
        <div>
          <EditButton />
          <TagLabel tagName="Shopping" />
        </div>
        <ButtonLink text="View details" />
      </div>
    </div>
  );
}
