import { CiEdit as IconEdit } from "react-icons/ci";

export default function EditButton() {
  return (
    <button className="cursor-pointer group">
      <IconEdit className="text-s24 text-blue-400/60 group-hover:text-blue-400 transition-colors duration-300" />
    </button>
  );
}
