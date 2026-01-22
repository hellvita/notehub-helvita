import DeleteButton from "../../Notes/Note/DeleteButton/DeleteButton";
import ButtonBack from "../ButtonBack/ButtonBack";

export default function Note() {
  return (
    <div className="relative bg-black-800 p-6">
      <DeleteButton />
      <ButtonBack backPath="/notes/filter/all" />
      <p>Note details</p>
    </div>
  );
}
