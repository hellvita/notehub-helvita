interface TagLabelProps {
  tagName: string;
}

export default function TagLabel({ tagName }: TagLabelProps) {
  return (
    <div className="border rounded-[28px] border-pink-400/60 text-pink-400 bg-black-800 mobile:text-s12 leading-5 px-2 py-1 inline selection:text-blue-400 selection:bg-blue-400-12">
      {tagName}
    </div>
  );
}
