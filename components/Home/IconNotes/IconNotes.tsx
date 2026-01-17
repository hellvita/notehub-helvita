import Image from "next/image";

type ScreenSize = "mobile" | "tablet" | "tablet-big" | "desktop";
interface IconNotesProps {
  screenSize: ScreenSize;
}

export default function IconNotes({ screenSize }: IconNotesProps) {
  const imageSrc = `/notes-${screenSize}.svg`;

  return <Image src={imageSrc} alt="a bunch of notes" />;
}
