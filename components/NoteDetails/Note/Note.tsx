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

      <div className="flex gap-x-3 items-center w-full mb-4">
        <ButtonBack backPath="/notes/filter/all" />
        <h2 className="text-center w-[70%] mobile:text-s28 tablet-big:text-s24 font-medium">
          {note.title}
        </h2>
      </div>

      <p className="leading-7 mobile:text-s20 text-white-400">
        {/* { note.content} */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
        error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
        dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
        est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
        sed quia non numquam eius modi tempora incidunt ut labore et dolore
        magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
        nostrum exercitationem ullam corporis suscipit laboriosam.
      </p>

      <div className="max-tablet-big:sticky bottom-0 flex justify-between items-center flex-wrap bg-linear-to-b from-black-800/0 via-black-800/97 to-black-800 pt-5 pb-6">
        <TagLabel tagName={note.tag} />
        <EditButton />
      </div>
    </div>
  );
}
