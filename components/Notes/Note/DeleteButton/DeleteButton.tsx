import { TiDocumentDelete as IconDelete } from "react-icons/ti";

interface DeleteButtonProps {
  id: string;
  handleDelete: (id: string) => void;
}

export default function DeleteButton({ id, handleDelete }: DeleteButtonProps) {
  return (
    <button
      className="group/btn absolute right-0 top-1 px-3 py-2 cursor-pointer"
      title="delete"
      aria-label="delete the note"
      onClick={() => handleDelete(id)}
    >
      <IconDelete className="text-white-950/60 group-hover/btn:text-pink-400 group-hover/btn:scale-90 group-hover/btn:tablet-big:scale-120 transition-colors duration-300 mobile:text-s24" />
    </button>
  );
}
