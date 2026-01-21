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
      <h2 className="mobile:text-s20 font-medium leading-8 mb-3">
        {note.title}
      </h2>
      <p className="mobile:text-s16 text-white-400 leading-5 mb-5">
        {note.content}
      </p>
      <div className="flex flex-col-reverse gap-y-5 tablet:flex-row tablet:gap-x-4 items-center">
        <ButtonLink text="View details" />
        <div className="flex justify-between items-center w-full">
          <EditButton />
          <TagLabel tagName="Shopping" />
        </div>
      </div>
    </div>
  );
}
