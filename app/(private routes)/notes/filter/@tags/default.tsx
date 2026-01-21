import { TAG_TYPES } from "@/types/note";
import NoteTag from "@/components/Notes/filterBar/NoteTag/NoteTag";

export default function NotesTags() {
  //** */ TODO onClick (ul) => target(li).set(active=true)

  return (
    <ul className="mb-8 flex flex-wrap items-center justify-center gap-x-4 tablet:gap-x-5 gap-y-3 tablet:gap-y-6">
      <NoteTag tagName={`All`} active />
      {TAG_TYPES.map((tag, index) => (
        <NoteTag key={index} tagName={tag} />
      ))}
    </ul>
  );
}
