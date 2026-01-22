import DeleteButton from "../../Notes/Note/DeleteButton/DeleteButton";
import ButtonBack from "../ButtonBack/ButtonBack";
import TagLabel from "@/components/Notes/Note/TagLabel/TagLabel";
import EditButton from "@/components/Notes/Note/EditButton/EditButton";
import { Note as TypeNote } from "@/types/note";

interface NoteProps {
  note: TypeNote;
}

export default function Note({ note }: NoteProps) {
  return (
    <div className="relative bg-black-800 p-6 pb-0">
      <DeleteButton />

      <div className="flex gap-x-3 items-center tablet-big:justify-center w-full mb-4">
        <ButtonBack backPath="/notes/filter/all" mobile />
        <h2 className="text-center w-[70%] tablet:w-[80%] mobile:text-s28 tablet-big:text-s24 font-medium">
          {note.title}
        </h2>
      </div>

      <p className="mobile:leading-7 mobile:text-s20 text-white-400">
        {note.content}
      </p>

      <div className="sticky bottom-0 flex justify-between items-center flex-wrap bg-linear-to-b from-black-800/0 via-black-800/97 to-black-800 pt-5 pb-6">
        <TagLabel tagName={note.tag} />
        <EditButton />
      </div>
    </div>
  );
}
