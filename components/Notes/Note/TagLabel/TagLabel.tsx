interface TagLabelProps {
  tagName: string;
}

export default function TagLabel({ tagName }: TagLabelProps) {
  return <div>{tagName}</div>;
}
