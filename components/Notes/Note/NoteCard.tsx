import DeleteButton from "./DeleteButton/DeleteButton";
import ButtonLink from "@/components/parts/ButtonLink/ButtonLink";
import TagLabel from "./TagLabel/TagLabel";
import EditButton from "./EditButton/EditButton";
import { Note } from "@/types/note";
import { sliceContent } from "@/lib/utils/strings";

interface NoteProps {
  note: Note;
}

export default function NoteCard({ note }: NoteProps) {
  return (
    <li className="relative w-full max-w-93 p-6 bg-black-800 selection:text-blue-400 selection:bg-blue-400-12">
      <DeleteButton />
      <h2 className="mobile:text-s20 font-medium leading-8 mb-3">
        {note.title}
      </h2>
      <p className="mobile:text-s16 text-white-400 leading-5 mb-5">
        {sliceContent(note.content)}
      </p>
      <div className="flex flex-col-reverse gap-y-5 tablet:flex-row tablet:gap-x-4 items-center">
        <ButtonLink
          text="View details"
          twStyles="py-2.5 px-5 w-full tablet:min-w-31.75 text-center text-green-200 mobile:text-s16 leading-5 border cursor-pointer selection:text-purple-800 selection:bg-white-950/90"
        />
        <div className="flex justify-between items-center w-full">
          <TagLabel tagName={note.tag} />
          <EditButton />
        </div>
      </div>
    </li>
  );
}
