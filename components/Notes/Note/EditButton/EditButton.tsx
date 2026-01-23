import Link from "next/link";
import { CiEdit as IconEdit } from "react-icons/ci";

interface EditButtonProps {
  noteId: string;
}

export default function EditButton({ noteId }: EditButtonProps) {
  return (
    <Link
      href={`/notes/${noteId}/edit`}
      className="group/edit cursor-pointer p-1"
      title="edit"
      aria-label="edit the note"
    >
      <IconEdit className="text-s28 text-blue-400/60 group-hover/edit:text-blue-400 group-hover/edit:scale-90 group-hover/edit:tablet-big:scale-110 transition-colors duration-300" />
    </Link>
  );
}
