import DeleteButton from "../../Notes/Note/DeleteButton/DeleteButton";
import ButtonBack from "../ButtonBack/ButtonBack";

export default function Note() {
  return (
    <div className="relative bg-black-800 p-6">
      <DeleteButton />
      <div className="flex gap-x-3 items-center w-full">
        <ButtonBack backPath="/notes/filter/all" />
        <h2 className="text-center w-[70%] mobile:text-s28 tablet-big:text-s20 font-medium">
          Team Meeting Notes
        </h2>
      </div>
    </div>
  );
}
