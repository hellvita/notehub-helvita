import DeleteButton from "./DeleteButton/DeleteButton";
import ButtonLink from "@/components/parts/ButtonLink/ButtonLink";
import TagLabel from "./TagLabel/TagLabel";
import EditButton from "./EditButton/EditButton";
import { Note } from "@/types/note";
import { sliceContent } from "@/lib/utils/strings";

interface NoteProps {
  note: Note;
  handleDelete: (id: string) => void;
}

export default function NoteCard({ note, handleDelete }: NoteProps) {
  return (
    <li className="relative flex flex-col w-full max-w-93 p-6 bg-black-800 selection:text-blue-400 selection:bg-blue-400-12">
      <DeleteButton id={note.id} handleDelete={handleDelete} />
      <h2 className="mobile:text-s20 font-medium leading-8 mb-3">
        {note.title}
      </h2>
      <p className="grow mobile:text-s16 text-white-400 leading-5 mb-5 overflow-hidden whitespace-pre-wrap">
        {sliceContent(note.content)}
      </p>
      <div>
        <div className="flex flex-col-reverse gap-y-5 tablet:flex-row tablet:gap-x-4 items-center">
          <ButtonLink
            text="View details"
            href={`/notes/${note.id}`}
            twStyles="py-2.5 px-5 w-full tablet:min-w-31.75 text-center text-green-200 mobile:text-s16 leading-5 border cursor-pointer selection:text-purple-800 selection:bg-white-950/90"
          />
          <div className="flex justify-between items-center w-full">
            <TagLabel tagName={note.tag} />
            <EditButton noteId={note.id} />
          </div>
        </div>
      </div>
    </li>
  );
}
