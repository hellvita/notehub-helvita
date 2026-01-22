import { TiDocumentDelete as IconDelete } from "react-icons/ti";

export default function DeleteButton() {
  return (
    <button
      className="group/btn absolute right-0 top-1 px-3 py-2 cursor-pointer"
      title="delete"
      aria-label="delete the note"
    >
      <IconDelete className="text-white-950/60 group-hover/btn:text-pink-400/60 group-hover/btn:scale-120 transition-colors duration-300 mobile:text-s24" />
    </button>
  );
}
