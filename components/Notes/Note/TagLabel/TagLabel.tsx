interface TagLabelProps {
  tagName: string;
}

export default function TagLabel({ tagName }: TagLabelProps) {
  return (
    <div className="border rounded-[28px] border-pink-400/60 text-pink-400 mobile:text-s12 leading-5 px-2 py-1">
      {tagName}
    </div>
  );
}
