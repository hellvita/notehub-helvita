import { CiEdit as IconEdit } from "react-icons/ci";

export default function EditButton() {
  return (
    <button
      className="group/edit cursor-pointer p-1"
      title="edit"
      aria-label="edit the note"
    >
      <IconEdit className="text-s28 text-blue-400/60 group-hover/edit:text-blue-400 group-hover/edit:scale-110 transition-colors duration-300" />
    </button>
  );
}
